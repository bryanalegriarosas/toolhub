export default {
    'speechToText.title': 'Speech to Text Converter - Free Online Voice Recognition',
    'speechToText.description': 'Free online speech-to-text converter with real-time voice recognition. Support for multiple languages, confidence levels, and customizable recording settings. Convert speech to text instantly.',
    'speechToText.recording_controls': 'Recording Controls:',
    'speechToText.start_recording': 'Start Recording',
    'speechToText.stop_recording': 'Stop Recording',
    'speechToText.clear_text': 'Clear Text',
    'speechToText.download_text': 'Download Text',
    'speechToText.voice_settings': 'Voice Settings:',
    'speechToText.language': 'Language:',
    'speechToText.confidence_threshold': 'Confidence Threshold:',
    'speechToText.max_recording_time': 'Max Recording Time:',
    'speechToText.transcribed_text': 'Transcribed Text:',
    'speechToText.characters': 'characters',
    'speechToText.recording': 'Recording...',
    'speechToText.not_recording': 'Not recording',
    'speechToText.recording_in_progress': 'Recording in progress...',
    'speechToText.low': 'Low',
    'speechToText.medium': 'Medium',
    'speechToText.high': 'High',
    'speechToText.seconds': 'seconds',
    'speechToText.minute': '1 minute',
    'speechToText.minutes_2': '2 minutes',
    'speechToText.minutes_5': '5 minutes',
    'speechToText.unlimited': 'Unlimited',
    'speechToText.copy': 'Copy',
    'speechToText.download': 'Download',
    'speechToText.transcribed_text_placeholder': 'Transcribed text will appear here...',
    
    // SEO Content specific to Speech to Text
    'speechToText.mainDescription': 'Free online speech-to-text converter with real-time voice recognition. Support for multiple languages, confidence levels, and customizable recording settings.',
    'speechToText.extendedDescription': 'Our comprehensive speech-to-text converter transforms spoken words into written text using advanced voice recognition technology. Perfect for meeting notes, lecture transcriptions, voice memos, and content creation. With support for multiple languages, customizable confidence thresholds, and flexible recording time limits, you can capture accurate transcriptions for any purpose. All processing happens locally in your browser for complete privacy and security.',
    'speechToText.features': [
        {
            title: 'Real-Time Voice Recognition',
            description: 'Instant speech-to-text conversion as you speak with live transcription display'
        },
        {
            title: 'Multi-Language Support',
            description: 'Support for 13+ languages including English, Spanish, French, German, Chinese, Japanese, and more'
        },
        {
            title: 'Confidence Level Control',
            description: 'Adjustable confidence threshold to balance accuracy and completeness of transcriptions'
        },
        {
            title: 'Flexible Recording Time',
            description: 'Customizable recording limits from 30 seconds to unlimited for various use cases'
        },
        {
            title: 'Privacy-Focused',
            description: 'All processing happens locally in your browser - no audio data sent to external servers'
        },
        {
            title: 'Mobile Optimized',
            description: 'Fully responsive design that works perfectly on smartphones and tablets'
        },
        {
            title: 'One-Click Copy',
            description: 'Instantly copy transcribed text to clipboard for easy sharing and editing'
        },
        {
            title: 'Download Support',
            description: 'Download transcriptions as text files with metadata and timestamps'
        },
        {
            title: 'Visual Recording Indicator',
            description: 'Clear visual feedback with animated recording status indicators'
        },
        {
            title: 'Browser Compatible',
            description: 'Works with all modern browsers supporting the Web Speech API'
        }
    ],
    'speechToText.steps': [
        'Click "Start Recording" to begin voice recognition',
        'Allow microphone access when prompted by your browser',
        'Speak clearly into your microphone at a moderate pace',
        'View real-time transcription as you speak',
        'Monitor confidence levels for accuracy assurance',
        'Use "Copy" to copy text to clipboard or "Download" to save as file'
    ],
    'speechToText.examples': [
        {
            title: 'Meeting Notes Transcription',
            description: 'Convert meeting speech to text notes for documentation',
            code: 'Speech: "In today\'s meeting we discussed the quarterly results and decided to launch the new product next month."',
            result: 'Text: In today\'s meeting we discussed the quarterly results and decided to launch the new product next month.'
        },
        {
            title: 'Lecture Recording',
            description: 'Transcribe educational lecture content for study notes',
            code: 'Speech: "The mitochondria is the powerhouse of the cell. It generates most of the cell\'s supply of adenosine triphosphate."',
            result: 'Text: The mitochondria is the powerhouse of the cell. It generates most of the cell\'s supply of adenosine triphosphate.',
            steps: [
                'Start recording during lecture',
                'Speak clearly and consistently',
                'Monitor confidence levels',
                'Download transcription for notes'
            ]
        },
        {
            title: 'Voice Memo to Text',
            description: 'Convert voice memos to searchable text for organization',
            code: 'Speech: "Remember to buy milk, eggs, and bread from the grocery store on the way home."',
            result: 'Text: Remember to buy milk, eggs, and bread from the grocery store on the way home.'
        },
        {
            title: 'Interview Transcription',
            description: 'Record and transcribe interviews for journalism and research',
            code: 'Speech: "Can you tell me about your experience with the project and what challenges you faced?"',
            result: 'Text: Can you tell me about your experience with the project and what challenges you faced?',
            steps: [
                'Set recording time for interview duration',
                'Position microphone appropriately',
                'Ensure quiet environment for clarity',
                'Review and edit transcription if needed'
            ]
        }
    ],
    'speechToText.useCases': [
        {
            title: 'Meeting Documentation',
            description: 'Professionals recording and transcribing business meetings for minutes and action items',
            example: 'Project manager transcribing team stand-up meetings for documentation'
        },
        {
            title: 'Academic Research',
            description: 'Researchers and students recording lectures, interviews, and focus groups for analysis',
            example: 'Graduate student transcribing research interviews for thesis analysis'
        },
        {
            title: 'Content Creation',
            description: 'Writers and creators dictating articles, scripts, and content ideas for faster production',
            example: 'Blogger dictating blog post ideas and drafts for content creation'
        },
        {
            title: 'Personal Productivity',
            description: 'Individuals creating voice memos, to-do lists, and personal notes for organization',
            example: 'Professional creating voice memos for task management and reminders'
        },
        {
            title: 'Journalism and Media',
            description: 'Journalists recording interviews and press conferences for accurate reporting',
            example: 'Reporter transcribing press conference quotes for news article'
        },
        {
            title: 'Accessibility Support',
            description: 'Users with accessibility needs converting speech to text for communication and documentation',
            example: 'User with mobility impairments using speech-to-text for written communication'
        }
    ],
    'speechToText.technicalDetails': 'Our speech-to-text converter uses the Web Speech API\'s SpeechRecognition interface, available in modern browsers. The technology captures audio from the user\' microphone and processes it using browser-native speech recognition engines. Confidence scoring helps filter low-quality results, while continuous mode allows for extended recording sessions. All audio processing happens client-side using the browser\'s built-in speech recognition capabilities.',
    'speechToText.bestPractices': [
        {
            title: 'Microphone Quality',
            tip: 'Use a quality microphone and position it close to your mouth for best audio capture.'
        },
        {
            title: 'Environment Control',
            tip: 'Record in a quiet environment with minimal background noise for improved accuracy.'
        },
        {
            title: 'Speech Clarity',
            tip: 'Speak clearly at a moderate pace with natural pauses for better recognition.'
        },
        {
            title: 'Confidence Settings',
            tip: 'Start with medium confidence (0.5) and adjust based on your accuracy needs.'
        },
        {
            title: 'Browser Compatibility',
            tip: 'Use Chrome or Edge for best speech recognition performance and language support.'
        }
    ],
    'speechToText.commonErrors': [
        {
            error: 'Microphone Access Denied',
            cause: 'Browser blocked microphone access or user denied permission',
            solution: 'Allow microphone access in browser settings and refresh the page.',
            prevention: 'Always grant microphone permission when prompted by the browser.'
        },
        {
            error: 'Speech Recognition Not Supported',
            cause: 'Browser doesn\'t support the Web Speech API',
            solution: 'Use a modern browser like Chrome, Firefox, or Edge with speech recognition support.',
            prevention: 'Check browser compatibility before starting important recordings.'
        },
        {
            error: 'Poor Audio Quality',
            cause: 'Background noise, poor microphone quality, or speaking too far from microphone',
            solution: 'Move to a quieter environment, use a better microphone, or speak closer to the device.',
            prevention: 'Test audio quality and environment before important recordings.'
        },
        {
            error: 'Recording Time Limit',
            cause: 'Recording stopped due to reaching the configured time limit',
            solution: 'Increase the recording time limit or use unlimited setting for longer sessions.',
            prevention: 'Set appropriate recording time limits for your expected content length.'
        },
        {
            error: 'Language Mismatch',
            cause: 'Selected language doesn\'t match the spoken language',
            solution: 'Select the correct language that matches your speech for better recognition.',
            prevention: 'Always verify language settings match your spoken language before recording.'
        }
    ],
    'speechToText.alternatives': [
        {
            name: 'Desktop Dictation Software',
            useCase: 'Dragon NaturallySpeaking, Windows Speech Recognition, macOS Dictation',
            pros: 'Advanced features, System integration, Higher accuracy',
            cons: 'Software installation, Platform specific, Cost involved',
            comparison: 'Our tool is free, web-based, and works across any device with a browser.'
        },
        {
            name: 'Mobile Voice Apps',
            useCase: 'Google Voice Typing, Siri Dictation, Samsung Voice Input',
            pros: 'Mobile optimized, Always available, Integrated with apps',
            cons: 'Small screen interface, Limited features, Platform locked',
            comparison: 'Our tool provides desktop-level features with mobile compatibility.'
        },
        {
            name: 'Cloud Speech Services',
            useCase: 'Google Cloud Speech-to-Text, Amazon Transcribe, Microsoft Azure Speech',
            pros: 'High accuracy, Advanced features, API access',
            cons: 'Cost involved, Internet dependency, Complex setup',
            comparison: 'Our tool is free, works offline, and requires no setup or registration.'
        },
        {
            name: 'Transcription Services',
            useCase: 'Rev, TranscribeMe, GoTranscript human transcription services',
            pros: 'Human accuracy, Professional formatting, Fast turnaround',
            cons: 'High cost, Privacy concerns, Turnaround time',
            comparison: 'Our tool provides instant, free transcription with complete privacy.'
        }
    ],
    'speechToText.relatedTools': [
        {
            name: 'Text to Speech Converter',
            description: 'Convert text back to speech with natural voices and customizable settings',
            url: '/text-to-speech'
        },
        {
            name: 'Audio Recorder',
            description: 'Record and edit audio files with professional tools',
            url: '/audio-recorder'
        },
        {
            name: 'Text Editor',
            description: 'Edit and format transcribed text with rich formatting options',
            url: '/text-editor'
        },
        {
            name: 'File Converter',
            description: 'Convert between different audio and text file formats',
            url: '/file-converter'
        },
        {
            name: 'Language Translator',
            description: 'Translate transcribed text to different languages',
            url: '/language-translator'
        },
        {
            name: 'Word Counter',
            description: 'Count words and analyze text statistics for transcriptions',
            url: '/word-counter'
        }
    ],
    'speechToText.faqs': [
        {
            question: 'How does speech-to-text technology work?',
            answer: 'Speech-to-text uses the Web Speech API to capture audio from your microphone and convert it to text using advanced voice recognition algorithms built into your browser.'
        },
        {
            question: 'What languages are supported?',
            answer: 'We support 13+ languages including English (US/UK), Spanish (Spain/Mexico), French, German, Italian, Portuguese, Chinese, Japanese, Korean, Arabic, and Hindi. Select your preferred language in the settings.'
        },
        {
            question: 'Is my voice data private and secure?',
            answer: 'Yes! All speech processing happens locally in your browser. No audio data is sent to external servers, ensuring complete privacy and security of your voice recordings.'
        },
        {
            question: 'What is the confidence threshold and how should I set it?',
            answer: 'Confidence threshold determines how confident the system must be before accepting a transcription. Higher values (0.7-1.0) mean more accurate but may miss some words, while lower values (0.3-0.5) capture more but may include errors.'
        },
        {
            question: 'Can I use this on mobile devices?',
            answer: 'Absolutely! The interface is fully responsive and optimized for mobile devices. Works with both built-in microphones and external microphone accessories on smartphones and tablets.'
        },
        {
            question: 'How accurate is the speech recognition?',
            answer: 'Accuracy depends on audio quality, background noise, speaker clarity, and language. For best results, speak clearly in a quiet environment with a good microphone. Typical accuracy ranges from 85-95% for clear speech.'
        },
        {
            question: 'What happens if I exceed the recording time limit?',
            answer: 'When you reach the time limit, recording automatically stops and you\'ll see a notification. You can then start a new recording session or increase the time limit for longer sessions.'
        },
        {
            question: 'Can I edit the transcribed text?',
            answer: 'Yes! The transcribed text appears in an editable text area where you can make corrections, add formatting, or combine multiple recording sessions into one document.'
        }
    ],
    'speechToText.securityNote': 'All speech-to-text processing happens locally in your browser using the Web Speech API. No audio data is transmitted to external servers, ensuring your voice recordings and transcriptions remain completely private and secure.',
    'speechToText.additionalContent': 'For developers: The speech-to-text functionality leverages the Web Speech API\'s SpeechRecognition interface. You can integrate similar functionality into your applications using the same API. Consider implementing fallback options for browsers without speech recognition support and explore advanced features like custom grammar and continuous mode for enhanced user experience.'
};
