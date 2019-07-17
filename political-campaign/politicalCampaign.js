// Challenge: Political Campaign

// Your job is to define the different objects and arrays, their structure, and the corresponding properties for each, to represent the following information about Elizabeth's campaign.

// Her congressional district (you can use yours here)
// Her platform statements for the following issues.
    // Taxes
    // Jobs
    // Infrastructure
    // Health care
    // Crime and enforcement
// URL for donation form
// Calendar of events
// Volunteer information
    // Name
    // Address
    // Email
    // Phone number
    // Availability
    // What activities each one is willing to do (e.g. answering phone calls, taking polls, etc.)
// Biography
// Image gallery
    // Head shot
    // Picture of family
    // Picture of constituents
// Mission statement
// URL for registering to vote

// Note: I should put everything in one large object

const campaign = {
    congressionalDistrict: "TN-05",
    platformStatements: {
        taxes: "What I think about taxes.",
        jobs: "People need them.",
        infrastructure: "If you build it, they will come.",
        healthCare: "It's important.",
        crimeAndEnforcement: "We should do that."
    },
    donationURL: "https://give-me-money.com",
    calendarOfEvents: [
        {
            name: "Campaign Rally",
            date: "07/30/2019",
            time: "19:00",
            location: "The Omni",
            description: "Come join Elizabeth at her campaign rally!"
        },
        {
            name: "Block Party",
            date: "08/05/2019",
            time: "11:00",
            location: "Sam Levy Homes",
            description: "Fun for the whole family: games, music, food, and political speeches"
        }
    ],
    volunteers: [
        {
            name: "Sue Johnson",
            address: "123 Fake Street",
            email: "sue@boynamedsue.com",
            phoneNumber: "931-555-1234",
            availability: ["Monday", "Tuesday", "Friday"],
            activitiesList: ["Answering phones", "Holding fundraisers"]
        },
        {
            name: "Bradley Johnson",
            address: "123 Fake Street",
            email: "bradley@johnson.com",
            phoneNumber: "615-555-1234",
            availability: ["Saturday", "Sunday"],
            activitiesList: ["Door to door greets", "Designing posters"]
        }],
    biography: "A bunch of information",
    imageGallery: ["Head shot", "Picture of family", "Picture of constituents"],
    missionStatement: "I have a mission...",
    voterRegistrationURL: "https://registertovote.gov"
}



