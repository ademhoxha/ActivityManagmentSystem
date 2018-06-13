
class Models {

    getSchemaJson(schemaName) {
        // user
        if (schemaName == "User")
            return {
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
            };

        if (schemaName == "UserList")
            return {
                email: String,
                mobilephone: String,
            };

        // emailOTP
        if (schemaName == "OtpReceiver")
            return {
                receiver: String,
                otp: {
                    code: String,
                    date: Date,
                    time: Number
                }
            };

        if (schemaName == "otpManager")
            return {
                date: Date,
                total: Number,
                mailList: [],
                lastTime: Number
            };

        // Project
        if (schemaName == "Project")
            return {
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

                projectNotes: [],
                isClosed: Boolean,
            };

        if (schemaName == "ProjectTask")
        return {
            projectName: String,

            taskName: String,
            taskAlias: String,

            startDate: Date,
            deliveryDate: Date,
            selledDays: Number,
            estimatedDays: Number,
            selledCostForDay: Number,
            estimatedCostForDay: Number,
            completion : Number,  

            taskFounder: {},
            taskTeam: [],

            taskNotes: [],
            isClosed: Boolean,
        };

    }
}

var istance = new Models();

module.exports = {
    Models: istance
}