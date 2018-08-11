
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
        committedJobs: [],
        executedJobs: [],
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
        projectJobs: [],

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

        extraEstimatedDays: Number,
        extraSelledDays: Number,

        taskFounder: {},
        taskTeam: [],
        jobs: [],

        taskNotes: [],
        isClosed: Boolean,
    },
    Job: {
        projectName: String,
        taskName: String,

        jobName: String,
        jobAlias: String,

        startDate: Date,
        deliveryDate: Date,

        estimatedDays: Number,
        estimatedCostForDay: Number,

        completionPercentage: Number,

        extraEstimatedDays: Number,

        jobCommitter: String,
        jobExecuter: String,

        jobNotes: [],
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