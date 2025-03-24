export const navLinks = [
    { href: "#dashboard", label: "Dashboard" },
    { href: "#loan-applications", label: "Loan Applications" },
    { href: "#customers", label: "Customers" },
    { href: "#payments", label: "Payments" },
    { href: "#reports", label: "Reports" },
    { href: "#settings", label: "Settings" },
];

export const adminFeatures = [
    { title: "Manage Loan Applications", description: "Approve, reject, or track loan applications." },
    { title: "Customer Management", description: "Register, edit, and manage customer records." },
    { title: "Payment Management", description: "Confirm or reject loan repayments." },
    { title: "Reports & Analytics", description: "Generate reports on loans and payments." },
    { title: "Notifications", description: "Receive alerts for due payments and overdue loans." },
    { title: "Operator Management", description: "Create and assign roles to operators." },
];

export const operatorFeatures = [
    { title: "Customer Registration", description: "Register new customers with loan preferences." },
    { title: "Loan Submission", description: "Submit loan applications with repayment details." },
    { title: "Payment Logging", description: "Log customer payments pending admin confirmation." },
    { title: "View Customers", description: "Access customer data without editing permissions." },
    { title: "Notifications", description: "Receive alerts for due or overdue payments." },
];

export const statistics = [
    { value: '10k+', label: 'Approved Loans' },
    { value: '5k+', label: 'Active Customers' },
    { value: '50M+', label: 'Total Loan Disbursement' },
];

export const reports = [
    { title: "Approved Loans", description: "View all successfully approved loans." },
    { title: "Pending Payments", description: "Track loans with pending payments." },
    { title: "Overdue Loans", description: "View loans overdue for repayment." },
    { title: "Financial Summary", description: "Analyze total disbursement and repayments." },
];

export const footerLinks = [
    {
        title: "Quick Links",
        links: [
            { name: "Dashboard", link: "/dashboard" },
            { name: "Loan Applications", link: "/loan-applications" },
            { name: "Customers", link: "/customers" },
            { name: "Payments", link: "/payments" },
            { name: "Reports", link: "/reports" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "FAQs", link: "/faqs" },
            { name: "Contact Support", link: "/contact" },
            { name: "Privacy Policy", link: "/privacy-policy" },
            { name: "Terms & Conditions", link: "/terms" },
        ],
    },
    {
        title: "Get in Touch",
        links: [
            { name: "support@loanapp.com", link: "mailto:support@loanapp.com" },
            { name: "+1234567890", link: "tel:+1234567890" },
        ],
    },
];
