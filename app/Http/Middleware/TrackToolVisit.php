<?php

namespace App\Http\Middleware;

use App\Models\Tool;
use App\Models\ToolVisit;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TrackToolVisit
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $response = $next($request);

        // Get the tool slug from the route
        $toolSlug = $request->route('tool');

        if ($toolSlug) {
            // Find the tool
            $tool = Tool::where('slug', $toolSlug)->first();
            
            if ($tool) {
                // Get client IP address
                $ipAddress = $this->getClientIpAddress($request);
                
                // Check if this IP has already visited this tool today
                if (!ToolVisit::hasVisitedToday($tool->id, $ipAddress)) {
                    // Record the visit
                    ToolVisit::recordVisit($tool->id, $ipAddress);
                    
                    // Increment the tool's visit counter
                    $tool->increment('visit_counter');
                }
            }
        }

        return $response;
    }

    /**
     * Get the real client IP address
     */
    private function getClientIpAddress(Request $request): string
    {
        // Check for forwarded IP addresses (behind proxy/load balancer)
        $forwardedIps = [
            $request->header('X-Forwarded-For'),
            $request->header('X-Real-IP'),
            $request->header('HTTP_X_FORWARDED_FOR'),
            $request->header('HTTP_X_REAL_IP'),
            $request->header('HTTP_CLIENT_IP'),
        ];

        foreach ($forwardedIps as $ip) {
            if (!empty($ip) && $ip !== 'unknown') {
                // X-Forwarded-For can contain multiple IPs, take the first one
                $ips = explode(',', $ip);
                $realIp = trim($ips[0]);
                
                // Validate IP address
                if (filter_var($realIp, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
                    return $realIp;
                }
            }
        }

        // Fallback to request IP
        return $request->ip();
    }
}
