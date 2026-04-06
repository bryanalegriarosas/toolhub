<template>
    <div class="max-w-6xl mx-auto p-0">
        <div class="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 sm:p-6">
            <h1 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-white">{{ t('sqlFormatter.title') }}</h1>

            <p class="text-gray-500 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                {{ t('sqlFormatter.description') }}
            </p>

            <div class="flex flex-col gap-3 sm:gap-4 mb-4">
                <label class="flex items-center gap-2">
                    <input type="checkbox" v-model="autoFormat" class="sm:mt-0" />
                    <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">{{ t('sqlFormatter.auto_format') }}</span>
                </label>
                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <label class="flex items-center gap-2">
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('sqlFormatter.indentation') }}</span>
                        <select v-model="indentType" class="form-select text-sm sm:text-base min-w-[100px]">
                            <option value="spaces">{{ t('sqlFormatter.spaces') }}</option>
                            <option value="tabs">{{ t('sqlFormatter.tabs') }}</option>
                        </select>
                    </label>
                    <label class="flex items-center gap-2">
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('sqlFormatter.size') }}</span>
                        <select v-model="indentSize" class="form-select text-sm sm:text-base min-w-[80px]">
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="8">8</option>
                        </select>
                    </label>
                    <label class="flex items-center gap-2">
                        <span class="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('sqlFormatter.load_file') }}</span>
                        <input ref="fileInput" type="file" @change="loadFile" class="form-input text-sm sm:text-base"
                            accept=".sql,.txt" />
                    </label>
                </div>
            </div>

            <div class="space-y-4 sm:space-y-6">
                <!-- SQL Input -->
                <div class="space-y-2">
                    <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                        {{ t('sqlFormatter.sql_input') }}
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
                    <textarea v-model="sqlInput" @input="handleInput" :placeholder="t('sqlFormatter.sql_input_placeholder')"
                        class="w-full h-48 sm:h-64 p-3 sm:p-4 border dark:border-gray-600 rounded-lg font-mono text-xs sm:text-sm focus:ring focus:ring-blue-200"></textarea>
                    <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {{ t('sqlFormatter.characters') }} {{ sqlInput.length }} | {{ t('sqlFormatter.lines') }} {{ lineCount }}
                    </div>
                </div>

                <!-- Formatted Output -->
                <div class="space-y-2">
                    <label class="block text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
                        Formatted SQL
                    </label>
                    <div class="border dark:border-gray-600 rounded-lg h-48 sm:h-64 overflow-auto bg-gray-900">
                        <pre v-if="formattedSql"
                            class="p-3 sm:p-4 text-green-400 text-xs sm:text-sm font-mono whitespace-pre-wrap">{{ formattedSql }}</pre>
                        <div v-else class="p-3 sm:p-4 text-gray-400 italic font-mono text-xs sm:text-sm">
                            {{ t('sqlFormatter.formatted_sql_will_appear_here') }}
                        </div>
                    </div>
                    <div class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        Characters: {{ formattedSql.length }}
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-wrap gap-2 sm:gap-3">
                <button @click="formatSql" :disabled="!sqlInput"
                    class="px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('sqlFormatter.format_sql') }}
                </button>

                <button @click="copyFormatted" :disabled="!formattedSql"
                    class="px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('sqlFormatter.copy_formatted') }}
                </button>

                <button @click="minifySql" :disabled="!sqlInput"
                    class="px-3 sm:px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('sqlFormatter.minify') }}
                </button>

                <button @click="downloadFormatted" :disabled="!formattedSql"
                    class="px-3 sm:px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 text-sm sm:text-base">
                    {{ t('sqlFormatter.download_sql') }}
                </button>

                <button @click="clearAll"
                    class="px-3 sm:px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-50 dark:bg-gray-7000 transition text-sm sm:text-base">
                    {{ t('sqlFormatter.clear_all') }}
                </button>
            </div>

            <!-- SQL Statistics -->
            <div v-if="stats" class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div class="text-center">
                    <div class="text-xl sm:text-2xl font-bold text-blue-600">{{ stats.keywords }}</div>
                    <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ t('sqlFormatter.keywords') }}</div>
                </div>
                <div class="text-center">
                    <div class="text-xl sm:text-2xl font-bold text-green-600">{{ stats.tables }}</div>
                    <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ t('sqlFormatter.tables') }}</div>
                </div>
                <div class="text-center">
                    <div class="text-xl sm:text-2xl font-bold text-purple-600">{{ stats.columns }}</div>
                    <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ t('sqlFormatter.columns') }}</div>
                </div>
                <div class="text-center">
                    <div class="text-xl sm:text-2xl font-bold text-orange-600">{{ stats.functions }}</div>
                    <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ t('sqlFormatter.functions') }}</div>
                </div>
            </div>

            <!-- Sample SQL Queries -->
            <div class="border-t pt-4 sm:pt-6">
                <h3 class="font-semibold mb-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">{{ t('sqlFormatter.sample_sql_queries') }}</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <button @click="loadSample('simple')"
                        class="p-3 sm:p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:bg-gray-700 text-left">
                        <div class="font-medium text-sm sm:text-base">{{ t('sqlFormatter.simple_select') }}</div>
                        <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ t('sqlFormatter.basic_query_with_where_clause') }}</div>
                    </button>
                    <button @click="loadSample('join')" class="p-3 sm:p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:bg-gray-700 text-left">
                        <div class="font-medium text-sm sm:text-base">{{ t('sqlFormatter.join_query') }}</div>
                        <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ t('sqlFormatter.multiple_table_joins') }}</div>
                    </button>
                    <button @click="loadSample('complex')"
                        class="p-3 sm:p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:bg-gray-700 text-left">
                        <div class="font-medium text-sm sm:text-base">{{ t('sqlFormatter.complex_query') }}</div>
                        <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ t('sqlFormatter.subqueries_and_functions') }}</div>
                    </button>
                    <button @click="loadSample('aggregate')"
                        class="p-3 sm:p-4 border dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:bg-gray-700 text-left">
                        <div class="font-medium text-sm sm:text-base">{{ t('sqlFormatter.aggregate_functions') }}</div>
                        <div class="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{{ t('sqlFormatter.group_by_with_aggregates') }}</div>
                    </button>
                </div>
            </div>

            <ToolSeoContentExpanded
                :title="title"
                :description="mainDescription"
                :extended-description="extendedDescription"
                :features="features"
                :steps="steps"
                :examples="examples"
                :use-cases="useCases"
                :technical-details="technicalDetails"
                :best-practices="bestPractices"
                :common-errors="commonErrors"
                :alternatives="alternatives"
                :related-tools="relatedTools"
                :faqs="faqs"
                :security-note="securityNote"
                :additional-content="additionalContent"
            />
        </div>
    </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import ToolSeoContentExpanded from "@/Components/tools/ToolSeoContent.vue";
import { useTranslations } from "@/languageManager.js";

// Usar sistema de traducciones
const { t } = useTranslations();

// SEO Content Data - Now using translations
const title = computed(() => t('sqlFormatter.title'));
const mainDescription = computed(() => t('sqlFormatter.mainDescription'));
const extendedDescription = computed(() => t('sqlFormatter.extendedDescription'));
const features = computed(() => t('sqlFormatter.features'));
const steps = computed(() => t('sqlFormatter.steps'));
const examples = computed(() => t('sqlFormatter.examples'));
const useCases = computed(() => t('sqlFormatter.useCases'));
const technicalDetails = computed(() => t('sqlFormatter.technicalDetails'));
const bestPractices = computed(() => t('sqlFormatter.bestPractices'));
const commonErrors = computed(() => t('sqlFormatter.commonErrors'));
const alternatives = computed(() => t('sqlFormatter.alternatives'));
const relatedTools = computed(() => t('sqlFormatter.relatedTools'));
const faqs = computed(() => t('sqlFormatter.faqs'));
const securityNote = computed(() => t('sqlFormatter.securityNote'));
const additionalContent = computed(() => t('sqlFormatter.additionalContent'));

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