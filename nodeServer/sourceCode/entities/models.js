
var models = {
    User: {
        pKey: String,
        email: String,
        password: String,
        name: String,
        surname: String,
        mobilephone: String,
        company: String,
        otp: {
            code: String,
            date: Date
        },
        authToken: String,
        projects: [],
        tasks: [],
        jobs: [],
    },

    UserList: {
        email: String,
        mobilephone: String,
    },

    Project: {
        projectName: String,
        projectAlias: String,
        startDate: Date,
        deliveryDate: Date,
        selledDays: Number,
        estimatedDays: Number,
        selledCostForDay: Number,
        estimatedCostForDay: Number,

        projectFounder: {},
        projectTeam: [],
        projectTasks: [],

        extraDays: [],

        projectNotes: [],
        isClosed: Boolean,
    },
    ProjectTask: {
        projectName: String,

        taskName: String,
        taskAlias: String,

        startDate: Date,
        deliveryDate: Date,
        selledDays: Number,
        estimatedDays: Number,
        selledCostForDay: Number,
        estimatedCostForDay: Number,

        completionPercentage: Number,

        extraDays: Number,

        taskFounder: {},
        taskTeam: [],

        taskNotes: [],
        isClosed: Boolean,
    },













    OtpReceiver: {
        receiver: String,
        otp: {
            code: String,
            date: Date,
            time: Number
        }
    },

    otpManager: {
        date: Date,
        total: Number,
        mailList: [],
        lastTime: Number
    },
}



module.exports = {
    Models: models
}