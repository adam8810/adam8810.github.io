'use strict';

angular.module('amboothcomApp')
    .constant('person', {
        profile: 'Full stack web application developer with a passion for innovation. ' +
        'Completed degree in Information Systems Management ' +
        'while refining skills through internships, freelance development work ' +
        'and side projects. Efficient, determined, self motivated learner ' +
        'with strong organizational skills. Group leader and team player with strong ' +
        'people skills resulting in many successful projects. Extensive experience with creating ' +
        'and consuming RESTful APIs.',
        email: 'adam@ambooth.com',
        phone: '(785) 813-1748',
        education: [
            {
                start: '2007',
                end: '2012',
                title: 'Oklahoma Christian University',
                location: 'Edmond, OK',
                major: 'Information Systems Management',
                text: 'Graduated April 2012'
            }
        ],
        skills: {
            column1: [
                'NodeJS',
                'AngularJS',
                'jQuery',
                'PHP'
            ],
            column2: [
                'HTML',
                'CSS',
                'Chrome Apps / Chrome APIs'
            ],
            column3: [

                'Gulp/Grunt Tasks',
                'REST APIs',
                'Wordpress Themes',
                'Regular Expressions'
            ],
            column4: [
                'Unit Testing',
                'MongoDB',
                'MySQL & SQL',
                'Git Version Control'
            ]
        },
        xp: {
            'Experience': [
                {
                    start: 'Dec 2012',
                    end: 'Present',
                    title: 'Software Engineer',
                    company: 'Flogistix',
                    location: 'Oklahoma City, OK',
                    text: 'Took lead role on numerous projects used by ' +
                    'Flogistix employees and external clients while providing support for all projects taken ' +
                    'on by department. Completely overhauled existing legacy applications and integrated test driven ' +
                    'development into workflows resulting in a much higher grade of development expectations and excellence. Introduced object-oriented ' +
                    'practices and optimized existing codebase yielding noticeably faster ' +
                    'results and happy customers. Transitioned existing web applications, websites and scripts ' +
                    'from Windows servers to cost-effective Amazon AWS instances. ' +
                    'Created company\'s REST API and was the main contributor while building AngularJS front-end applications and updating existing PHP ' +
                    'applications to use new endpoints.',
                    items: [
                        'Amazon AWS/Linux administrator',
                        'Introduced OOP practices and frameworks including FuelPHP',
                        'Increased productivity by creating deployment tools used by all developers',
                        'Created WIKIs for all departments and even a system to document codebase for developers',
                        'Main creator and contributor to company API'
                    ]
                },
                {
                    start: 'Feb 2012',
                    end: 'Nov 2012',
                    title: 'Internal Developer',
                    company: 'LifeChurch.tv',
                    location: 'Edmond, OK',
                    text: 'Focused on internal projects used by staff ' +
                    'and volunteers. Utilized the FuelPHP Framework and Git/Github for versioning ' +
                    'and collaboration. Worked with numerous REST-based APIs including Google Maps, ' +
                    'Fellowship One, the CellForce SMS system, and Active Directory. Created and ' +
                    'maintained Wordpress websites and plugins used by team members.',
                    items: [
                        'Used FuelPHP Framework and Git/Github',
                        'Used APIs for Google Maps, Fellowship One, CellForce SMS systems, and Active Directory interactions',
                        'Created web applications used by staff and volunteers',
                        'Created and maintain Wordpress websites and plugins'
                    ]
                },
                {
                    start: 'April 2010',
                    end: 'Sept 2011',
                    title: 'Web Developer',
                    company: 'T&S Web Design',
                    location: 'Edmond, OK',
                    text: 'Lead developer primarily focused on front-end development ' +
                    'projects requiring a great deal of expert knowledge of HTML, CSS and Javascript. Tested heavily against all ' +
                    'browsers including Internet Explorer 6. Gracefully ' +
                    'transitioned company into using Google Apps for email, calendars, and their internal wiki ' +
                    'system.',
                    items: [
                        'Created websites using WordPress framework, HTML, PHP, CSS, and JQuery based on designs made in-house',
                        'Conducted training meetings for clients',
                        'Provided technical support for staff and clients'
                    ]
                },
                {
                    start: 'April 2010',
                    end: 'May 2010',
                    title: 'Programmer Intern',
                    company: 'North Institute, OC',
                    location: 'Edmond, OK',
                    text: 'Student intern position. Made modifications to the organization website making it easier to ' +
                    'navigate and find content. Further developed internal media sharing system used to distribute ' +
                    'content to students.',
                    items: [
                        'Redesigned and managed North Institute website',
                        'Worked on internal media sharing software used to distribute videos and other media to students using C#, ASP, and HTML'
                    ]
                },
                {
                    start: 'Aug 2009',
                    end: 'April 2010',
                    title: 'Software Technician',
                    company: 'Support Central, OC',
                    location: 'Edmond, OK',
                    text: 'Software Support Technician at Oklahoma Christian University Provided friendly support ' +
                    'to students, teachers and staff. Adapted quickly to workflow, mentored new and current student ' +
                    'workers.',
                    items: [
                        'Provided in-person technical support to fellow students, teachers and staff',
                        'Provided support for teachers in classroom (On and off the clock)',
                        'Ran hardware diagnostics; passed on to hardware department as necessary'
                    ]
                }
            ],
            'Other Experience': [
                {
                    start: 'Sept 2008',
                    end: 'Apr 2012',
                    title: 'Executive Secretary & Webmaster',
                    company: 'Psi Epsilon Fraternity',
                    location: 'Oklahoma Christian University, Edmond, OK',
                    text: 'Founded new fraternity, Psi Epsilon, during freshmen year in college. Grew fraternity to over ' +
                    '80 members before graduation. Highly involved with all decision-making and served as an ' +
                    'executive officer for 4 years. Created the website used by all members for information and ' +
                    'even payment of dues. Maintained emailing lists and overall organization of club which included ' +
                    'taking meeting notes and sending calendar invites.',
                    items: [
                        'Founded club and recruited 20 initial members which grew to over 80 by graduation',
                        'Created and maintained fraternity website',
                        'Took meeting notes and maintained emailing lists'
                    ]
                },
                {
                    start: 'Sept 2007',
                    end: 'Apr 2009',
                    title: 'Male Class Representative',
                    company: 'OC Student Government Association',
                    location: 'Oklahoma Christian University, Edmond, OK',
                    text: 'Part of dedicated team of officers who met weekly to bring student body closer to stimulate student ' +
                    'growth and add value to relationships. Planned two banquets, two school-wide parties, and attended ' +
                    'many student government ' +
                    'meetings on a weekly basis. Voted on significant developments and issues that affected the ' +
                    'entire school. Managed the SGA website which was used by the entire school.',
                    items: [
                        'Attended weekly SGA meetings as well as separate freshmen officer meetings',
                        'Planned two banquets and two school-wide parties',
                        'Maintained SGA website for two years'
                    ]
                }
            ]
        }

    });
