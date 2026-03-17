<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">SQL Formatter</h1>

            <p class="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
                Format and beautify SQL queries with proper indentation.
            </p>

            <div class="flex flex-col gap-3 sm:gap-4 mb-4">
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="autoFormat" class="sm:mt-0" />
                    <span class="text-sm sm:text-base text-gray-700">Auto Format</span>
                </label>
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <label class="flex items-center gap-2">
                        <span class="text-gray-700 text-sm sm:text-base">Indentation:</span>
                        <select v-model="indentType" class="form-select text-sm sm:text-base min-w-[100px]">
                            <option value="spaces">Spaces</option>
                            <option value="tabs">Tabs</option>
                        </select>
                    </label>
                    <label class="flex items-center gap-2">
                        <span class="text-gray-700 text-sm sm:text-base">Size:</span>
                        <select v-model="indentSize" class="form-select text-sm sm:text-base min-w-[80px]">
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="8">8</option>
                        </select>
                    </label>
                    <label class="flex items-center gap-2">
                        <span class="text-gray-700 text-sm sm:text-base">Load file:</span>
                        <input ref="fileInput" type="file" @change="loadFile" class="form-input text-sm sm:text-base"
                            accept=".sql,.txt" />
                    </label>
                </div>
            </div>

            <div class="space-y-4 sm:space-y-6">
                <!-- SQL Input -->
                <div class="space-y-2">
                    <label class="block text-sm sm:text-base font-medium text-gray-700">
                        SQL Input
                    </label>
                    <div class="flex flex-wrap gap-1 sm:gap-2 mb-2">
                        <button @click="insertSQL('SELECT')"
                            class="px-2 sm:px-3 py-1 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                            title="SELECT">
                            SELECT
                        </button>
                        <button @click="insertSQL('FROM')"
                            class="px-2 sm:px-3 py-1 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                            title="FROM">
                            FROM
                        </button>
                        <button @click="insertSQL('WHERE')"
                            class="px-2 sm:px-3 py-1 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                            title="WHERE">
                            WHERE
                        </button>
                        <button @click="insertSQL('JOIN')"
                            class="px-2 sm:px-3 py-1 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                            title="JOIN">
                            JOIN
                        </button>
                        <button @click="insertSQL('GROUP BY')"
                            class="px-2 sm:px-3 py-1 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                            title="GROUP BY">
                            GROUP BY
                        </button>
                        <button @click="insertSQL('ORDER BY')"
                            class="px-2 sm:px-3 py-1 sm:py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition text-xs sm:text-sm"
                            title="ORDER BY">
                            ORDER BY
                        </button>
                    </div>
                    <textarea v-model="sqlInput" @input="handleInput" placeholder="Paste your SQL query here..."
                        class="w-full h-48 sm:h-64 p-3 sm:p-4 border rounded-lg font-mono text-xs sm:text-sm focus:ring focus:ring-blue-200"></textarea>
                    <div class="text-xs sm:text-sm text-gray-500">
                        Characters: {{ sqlInput.length }} | Lines: {{ lineCount }}
                    </div>
                </div>

                <!-- Formatted Output -->
                <div class="space-y-2">
                    <label class="block text-sm sm:text-base font-medium text-gray-700">
                        Formatted SQL
                    </label>
                    <div class="border rounded-lg h-48 sm:h-64 overflow-auto bg-gray-900">
                        <pre v-if="formattedSql"
                            class="p-3 sm:p-4 text-green-400 text-xs sm:text-sm font-mono whitespace-pre-wrap">{{ formattedSql }}</pre>
                        <div v-else class="p-3 sm:p-4 text-gray-400 italic font-mono text-xs sm:text-sm">
                            Formatted SQL will appear here...
                        </div>
                    </div>
                    <div class="text-xs sm:text-sm text-gray-500">
                        Characters: {{ formattedSql.length }}
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-2 sm:gap-3">
                <button @click="formatSql" :disabled="!sqlInput"
                    class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Format SQL
                </button>

                <button @click="copyFormatted" :disabled="!formattedSql"
                    class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Copy Formatted
                </button>

                <button @click="minifySql" :disabled="!sqlInput"
                    class="px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Minify
                </button>

                <button @click="downloadFormatted" :disabled="!formattedSql"
                    class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-sm sm:text-base">
                    Download SQL
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition text-sm sm:text-base">
                    Clear All
                </button>
            </div>

            <!-- SQL Statistics -->
            <div v-if="stats" class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg">
                <div class="text-center">
                    <div class="text-xl sm:text-2xl font-bold text-blue-600">{{ stats.keywords }}</div>
                    <div class="text-xs sm:text-sm text-gray-600">Keywords</div>
                </div>
                <div class="text-center">
                    <div class="text-xl sm:text-2xl font-bold text-green-600">{{ stats.tables }}</div>
                    <div class="text-xs sm:text-sm text-gray-600">Tables</div>
                </div>
                <div class="text-center">
                    <div class="text-xl sm:text-2xl font-bold text-purple-600">{{ stats.columns }}</div>
                    <div class="text-xs sm:text-sm text-gray-600">Columns</div>
                </div>
                <div class="text-center">
                    <div class="text-xl sm:text-2xl font-bold text-orange-600">{{ stats.functions }}</div>
                    <div class="text-xs sm:text-sm text-gray-600">Functions</div>
                </div>
            </div>

            <!-- Sample SQL Queries -->
            <div class="border-t pt-4 sm:pt-6">
                <h3 class="font-semibold mb-3 text-gray-700 text-sm sm:text-base">Sample SQL Queries</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <button @click="loadSample('simple')"
                        class="p-3 sm:p-4 border rounded-lg hover:bg-gray-50 text-left">
                        <div class="font-medium text-sm sm:text-base">Simple SELECT</div>
                        <div class="text-xs sm:text-sm text-gray-600">Basic query with WHERE clause</div>
                    </button>
                    <button @click="loadSample('join')" class="p-3 sm:p-4 border rounded-lg hover:bg-gray-50 text-left">
                        <div class="font-medium text-sm sm:text-base">JOIN Query</div>
                        <div class="text-xs sm:text-sm text-gray-600">Multiple table joins</div>
                    </button>
                    <button @click="loadSample('complex')"
                        class="p-3 sm:p-4 border rounded-lg hover:bg-gray-50 text-left">
                        <div class="font-medium text-sm sm:text-base">Complex Query</div>
                        <div class="text-xs sm:text-sm text-gray-600">Subqueries and functions</div>
                    </button>
                    <button @click="loadSample('aggregate')"
                        class="p-3 sm:p-4 border rounded-lg hover:bg-gray-50 text-left">
                        <div class="font-medium text-sm sm:text-base">Aggregate Functions</div>
                        <div class="text-xs sm:text-sm text-gray-600">GROUP BY with aggregates</div>
                    </button>
                </div>
            </div>

            <ToolSeoContent title="SQL Formatter - Query Beautifier"
                description="Format and beautify SQL queries with proper indentation and syntax highlighting."
                :steps="steps" :examples="examples" :faqs="faqs" />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import ToolSeoContent from "@/Components/tools/ToolSeoContent.vue";

const examples = [
    {
        title: "Complex SELECT Query",
        description: "Format a complex SELECT query with JOINs and WHERE clauses",
        code: "SELECT u.name, u.email, p.title, p.created_at FROM users u JOIN posts p ON u.id = p.user_id WHERE u.status = 'active' AND p.published = true ORDER BY p.created_at DESC LIMIT 10",
        result: "SELECT\n    u.name,\n    u.email,\n    p.title,\n    p.created_at\nFROM users u\nJOIN posts p ON u.id = p.user_id\nWHERE u.status = 'active'\n  AND p.published = true\nORDER BY p.created_at DESC\nLIMIT 10"
    },
    {
        title: "Multi-Table Query with Aggregation",
        description: "Format SQL query with GROUP BY and aggregate functions",
        code: "SELECT c.name, COUNT(o.id) as order_count, SUM(o.total) as revenue FROM customers c LEFT JOIN orders o ON c.id = o.customer_id WHERE o.created_at >= '2024-01-01' GROUP BY c.id, c.name HAVING COUNT(o.id) > 5 ORDER BY revenue DESC",
        result: "SELECT\n    c.name,\n    COUNT(o.id) as order_count,\n    SUM(o.total) as revenue\nFROM customers c\nLEFT JOIN orders o ON c.id = o.customer_id\nWHERE o.created_at >= '2024-01-01'\nGROUP BY c.id, c.name\nHAVING COUNT(o.id) > 5\nORDER BY revenue DESC",
        steps: [
            "Paste complex SQL query",
            "Choose indentation style (4 spaces recommended)",
            "Enable auto-format for real-time formatting",
            "Copy formatted SQL for documentation"
        ]
    }
];

const steps = [
    "Enter or paste your SQL query",
    "Configure formatting options (indentation, size)",
    "Click 'Format SQL' or use auto format",
    "Copy or download the formatted result"
];

const faqs = [
    {
        question: "What SQL dialects are supported?",
        answer: "The formatter supports standard SQL syntax including SELECT, INSERT, UPDATE, DELETE, JOIN, and common functions."
    },
    {
        question: "Can I customize the indentation?",
        answer: "Yes, you can choose between spaces or tabs and set the indentation size (2, 4, or 8)."
    },
    {
        question: "Does it support complex queries?",
        answer: "Yes, it handles complex queries with subqueries, joins, and aggregate functions."
    }
];

const sqlInput = ref("");
const formattedSql = ref("");
const autoFormat = ref(true);
const indentType = ref("spaces");
const indentSize = ref("4");
const fileInput = ref(null);
const stats = ref(null);

const lineCount = computed(() => {
    return sqlInput.value.split('\n').length;
});

const getIndent = () => {
    const size = parseInt(indentSize.value);
    return indentType.value === "tabs" ? "\t".repeat(size / 2) : " ".repeat(size);
};

// SQL Keywords
const sqlKeywords = [
    'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'NOT', 'IN', 'LIKE', 'BETWEEN',
    'INSERT', 'INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE', 'CREATE', 'TABLE',
    'ALTER', 'DROP', 'INDEX', 'PRIMARY', 'KEY', 'FOREIGN', 'REFERENCES',
    'JOIN', 'INNER', 'LEFT', 'RIGHT', 'FULL', 'OUTER', 'ON', 'AS',
    'GROUP', 'BY', 'HAVING', 'ORDER', 'ASC', 'DESC', 'LIMIT', 'OFFSET',
    'UNION', 'ALL', 'DISTINCT', 'COUNT', 'SUM', 'AVG', 'MIN', 'MAX',
    'CASE', 'WHEN', 'THEN', 'ELSE', 'END', 'IF', 'EXISTS', 'IS', 'NULL'
];

const formatSql = () => {
    if (!sqlInput.value.trim()) {
        formattedSql.value = "";
        stats.value = null;
        return;
    }

    let formatted = sqlInput.value.trim();
    const indent = getIndent();

    // Basic SQL formatting
    formatted = formatted
        // Split by common SQL keywords
        .replace(/\b(SELECT|FROM|WHERE|AND|OR|NOT|IN|LIKE|BETWEEN|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|ALTER|DROP|INDEX|PRIMARY|KEY|FOREIGN|REFERENCES|JOIN|INNER|LEFT|RIGHT|FULL|OUTER|ON|AS|GROUP|BY|HAVING|ORDER|ASC|DESC|LIMIT|OFFSET|UNION|ALL|DISTINCT|COUNT|SUM|AVG|MIN|MAX|CASE|WHEN|THEN|ELSE|END|IF|EXISTS|IS|NULL)\b/gi, '\n$1')
        // Handle parentheses
        .replace(/\(/g, '(\n' + indent)
        .replace(/\)/g, '\n)')
        // Handle commas
        .replace(/,/g, ',\n' + indent)
        // Clean up multiple newlines
        .replace(/\n\s*\n/g, '\n')
        .replace(/^\s+|\s+$/g, '');

    // Split into lines and format each
    const lines = formatted.split('\n');
    const formattedLines = [];
    let currentIndent = 0;
    let inParentheses = false;

    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed) return;

        // Adjust indentation based on keywords
        if (trimmed.match(/^(FROM|WHERE|GROUP BY|HAVING|ORDER BY|LIMIT|UNION)$/i)) {
            currentIndent = 0;
        } else if (trimmed.match(/^(AND|OR)$/i)) {
            currentIndent = 1;
        } else if (trimmed === ')') {
            currentIndent = Math.max(0, currentIndent - 1);
            inParentheses = false;
        } else if (trimmed === '(') {
            inParentheses = true;
        }

        const indentStr = indent.repeat(currentIndent);
        formattedLines.push(indentStr + trimmed);

        // Increase indentation for next line
        if (trimmed === '(' || (inParentheses && !trimmed.endsWith(')'))) {
            currentIndent++;
        } else if (trimmed === ')' && currentIndent > 0) {
            currentIndent--;
        }
    });

    formattedSql.value = formattedLines.join('\n');
    calculateStats();
};

const minifySql = () => {
    if (!sqlInput.value.trim()) return;

    formattedSql.value = sqlInput.value
        .replace(/\s+/g, ' ')
        .replace(/\s*,\s*/g, ',')
        .replace(/\s*\(\s*/g, '(')
        .replace(/\s*\)\s*/g, ')')
        .replace(/\s*;\s*/g, ';')
        .trim();

    calculateStats();
};

const calculateStats = () => {
    const text = formattedSql.value.toUpperCase();
    stats.value = {
        keywords: (text.match(/\b(SELECT|FROM|WHERE|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|JOIN|GROUP|ORDER|UNION|CASE|IF)\b/g) || []).length,
        tables: (text.match(/\bFROM\s+(\w+)|JOIN\s+(\w+)\b/g) || []).length,
        columns: (text.match(/\b(\w+)\s*(?:,|\s+FROM|\s+WHERE|\s+GROUP|\s+ORDER|\s*\))/g) || []).length,
        functions: (text.match(/\b(COUNT|SUM|AVG|MIN|MAX|CONCAT|SUBSTRING|UPPER|LOWER|TRIM|COALESCE|ISNULL|NULLIF)\s*\(/g) || []).length
    };
};

const insertSQL = (keyword) => {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    sqlInput.value = sqlInput.value.substring(0, start) + keyword + " " + sqlInput.value.substring(end);

    setTimeout(() => {
        textarea.focus();
        textarea.setSelectionRange(start + keyword.length + 1, start + keyword.length + 1);
    }, 0);
};

const copyFormatted = () => {
    if (!formattedSql.value) return;
    navigator.clipboard.writeText(formattedSql.value);
};

const downloadFormatted = () => {
    if (!formattedSql.value) return;
    const blob = new Blob([formattedSql.value], { type: "text/sql" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formatted-query.sql";
    a.click();
    URL.revokeObjectURL(url);
};

const clearAll = () => {
    sqlInput.value = "";
    formattedSql.value = "";
    stats.value = null;
    if (fileInput.value) fileInput.value.value = null;
};

const handleInput = () => {
    if (autoFormat.value) {
        formatSql();
    }
};

const loadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        sqlInput.value = ev.target.result;
        if (autoFormat.value) formatSql();
    };
    reader.readAsText(file);
};

const loadSample = (type) => {
    const samples = {
        simple: `SELECT id, name, email FROM users WHERE status = 'active' AND created_at > '2023-01-01' ORDER BY name`,

        join: `SELECT u.name, u.email, p.title, p.salary FROM users u JOIN positions p ON u.position_id = p.id WHERE u.department = 'IT' AND p.salary > 50000 ORDER BY p.salary DESC`,

        complex: `SELECT e.name, e.salary, d.department_name, (SELECT AVG(salary) FROM employees WHERE department_id = e.department_id) as avg_salary FROM employees e LEFT JOIN departments d ON e.department_id = d.id WHERE e.salary > (SELECT AVG(salary) FROM employees) AND EXISTS (SELECT 1 FROM projects p WHERE p.employee_id = e.id AND p.status = 'active') ORDER BY e.salary DESC`,

        aggregate: `SELECT d.department_name, COUNT(e.id) as employee_count, AVG(e.salary) as avg_salary, MAX(e.salary) as max_salary, MIN(e.salary) as min_salary FROM departments d LEFT JOIN employees e ON d.id = e.department_id WHERE d.status = 'active' GROUP BY d.id, d.department_name HAVING COUNT(e.id) > 5 ORDER BY avg_salary DESC`
    };

    sqlInput.value = samples[type] || '';
    if (autoFormat.value) formatSql();
};

// Auto-format when settings change
watch([indentType, indentSize], () => {
    if (autoFormat.value && sqlInput.value) {
        formatSql();
    }
});

// Initial format if there's content
if (sqlInput.value && autoFormat.value) {
    formatSql();
}
</script>