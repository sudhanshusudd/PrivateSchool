import { Award, BookOpen, Camera, Users } from "lucide-react";

export const imageFiles = {
    Academic: [
        "Academic1.jpg",
        "science exhibition1.jpg",
        "science exhibition2.jpg",
        "science exhibition3.jpg",
        "science exhibition4.jpg",
    ],
    cultural: [
        "cultural1.jpg",
        "cultural2.jpg",
        "cultural3.jpg",
        "cultural4.jpeg",
        "cultural5.jpeg",
        "cultural6.jpeg",
        "cultural7.jpg",
        "cultural8.jpg",
    ],
    infrastructure: [
        "infra1.jpg",
        "infra2.jpg",
        "infra3.jpg",
        "infra4.png",
        "infra5.png",
        "infra6.jpg",
        "Lab1.png",
    ],
    sports: [
        "ncc1.jpg",
        "ncc2.jpg",
        "ncc3.jpg",
        "sports1.jpeg",
        "sports2.jpeg",
        "sports3.jpeg",
        "sports4.jpeg",
        "sports5.jpeg",
        "sports6.jpg",
        "sports7.jpg",
        "sports8.jpg",
        "sports9.jpg",
        "sports10.jpg",
    ],
};

export const categories = [
    { value: 'all', label: 'All Categories', icon: Camera },
    { value: 'Academic', label: 'Academic Events', icon: BookOpen },
    { value: 'sports', label: 'Sports & Athletics', icon: Award },
    { value: 'cultural', label: 'Cultural Activities', icon: Users },
    { value: 'infrastructure', label: 'Campus & Infrastructure', icon: Camera },
];

export const galleryItems = [
    {
        id: 1,
        type: 'image',
        category: 'Academic',
        year: '2024',
        title: 'Academic Events',
        description: 'Students showcasing innovative science projects',
        thumbnail:
            'https://images.pexels.com/photos/8471888/pexels-photo-8471888.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: 'March 15, 2024',
    },
    {
        id: 2,
        type: 'image',
        category: 'sports',
        year: '2024',
        title: 'Sports & Athletics',
        description: 'Inter-house basketball tournament finals',
        thumbnail:
            'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: 'February 20, 2024',
    },
    {
        id: 3,
        type: 'image',
        category: 'cultural',
        year: '2024',
        title: 'Cultural Activities',
        description: 'Highlights from our grand annual day event',
        thumbnail:
            'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: 'January 25, 2024',
    },
    {
        id: 4,
        type: 'image',
        category: 'infrastructure',
        year: '2024',
        title: 'Campus & Infrastructure',
        description: 'Our newly renovated library with modern facilities',
        thumbnail:
            'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
        date: 'January 10, 2024',
    },
];