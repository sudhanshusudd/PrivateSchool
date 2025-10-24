
export interface Contact {
    head: string;
    phone?: string;
}

export interface Department {
    name: string;
    contacts: Contact[];
    email?: string;
    description?: string;
}
export const departments: Department[] = [
    {
        name: "Admission Office",
        contacts: [
            { head: "Mr. Pramod Kumar", phone: "+91 9431376581" },
            { head: "Mr. Dilip Kumar" },
        ],
        email: "admissions@school.edu.in",
        description: "New student admissions and enrollment queries",
    },
    {
        name: "Academic Office",
        contacts: [
            { head: "Mr. Pramod Kumar", phone: "+91 9431376581" },
            { head: "Mr. Amar Kumer Paul" },
            { head: "Mr. Ajay Prasad Rout", phone: "+91 9431541709" },
            { head: "Mrs./Ms. Babita Devi", phone: "+91 9431168977" },
        ],
        email: "academic@school.edu.in",
        description: "Academic programs, curriculum, and student progress",
    },
    {
        name: "Administration",
        contacts: [
            { head: "Mr. Pramod Kumar", phone: "+91 9431376581" },
            { head: "Mr. Ajay Prasad Rout", phone: "+91 943154709" },
        ],
        email: "admin@school.edu.in",
        description: "General administration and operational matters",
    },
    {
        name: "Hostel Office",
        contacts: [
            { head: "Mr. Dilip Kumar " },
            { head: "Mr. Deepak Mahato", phone: "+91 8873915202" },
            { head: "Mr. Pradeep Kumar", phone: "+91 6201590362" },
        ],
        email: "hostel@school.edu.in",
        description: "Hostel accommodation and residential services",
    },
    {
        name: "Transport Department",
        contacts: [
            { head: "Mr. Sanjay Tiwary", phone: "+91 8789904562" },
            { head: "Mr. Dilip Kumar" },
            { head: "Mr. Deva Soren" },
        ],
        email: "transport@school.edu.in",
        description: "School bus services and transportation",
    },
    {
        name: "Fee Department",
        contacts: [
            { head: "Mr. Dilip Kumar", phone: "+91 9430771965" },
            { head: "Dr. Deva Soren", phone: "+91 7759011864" },
        ],
        email: "accounts@school.edu.in",
        description: "Fee payments, financial assistance, and billing",
    },
    {
        name: "Teachers Training Cell",
        contacts: [
            { head: "Mr. Pramod Kumar" },
            { head: "Dr. Ajay Prasad Rout" },
        ],
        email: "training@school.edu.in",
        description: "Coordination of teacher training, professional development, and workshops.",
    },
];