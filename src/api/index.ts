import express from "express";
import UserService from "../services";
export const indexRouter = express.Router();
indexRouter.post("/CreateUser", async (req, res) => {
    const result = await UserService.addUser(req.body);
    res.json({
        status: result
    })
})
indexRouter.get("/getAllUser", async (req, res) => {
    const result = await UserService.getAllUser();
    res.json({
        status: result
    })
})
indexRouter.put("/UpdateUser/:id", async (req, res) => {
    const result = await UserService.updateUser(req.body, parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.delete("/DeleteUser/:id", async (req, res) => {
    const result = await UserService.deleteUser(parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.post("/CreateContactInformation", async (req, res) => {
    const result = await UserService.addContactInformation(req.body);
    res.json({
        status: result
    })
})
indexRouter.get("/getAllContactInformation", async (req, res) => {
    const result = await UserService.getAllContactInformation();
    res.json({
        status: result
    })
})
indexRouter.put("/UpdateContactInformation/:id", async (req, res) => {
    const result = await UserService.updateContactInformation(req.body, parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.delete("/DeleteContactInformation/:id", async (req, res) => {
    const result = await UserService.deleteContactInformation(parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.post("/CreateHolidayInformation", async (req, res) => {
    const result = await UserService.addHolidayInformation(req.body);
    res.json({
        status: result
    })
})
indexRouter.get("/getAllHolidayInformation", async (req, res) => {
    const result = await UserService.getAllHolidayInformation();
    res.json({
        status: result
    })
})
indexRouter.put("/UpdateHolidayInformation/:id", async (req, res) => {
    const result = await UserService.updateHolidayInformation(req.body, parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.delete("/DeleteHolidayInformation/:id", async (req, res) => {
    const result = await UserService.deleteHolidayInformation(parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.post("/CreateSalaryInformation", async (req, res) => {
    const result = await UserService.addSalaryInformation(req.body);
    res.json({
        status: result
    })
})
indexRouter.get("/getAllSalaryInformation", async (req, res) => {
    const result = await UserService.getAllSalaryInformation();
    res.json({
        status: result
    })
})
indexRouter.put("/UpdateSalaryInformation/:id", async (req, res) => {
    const result = await UserService.updateSalaryInformation(req.body, parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.delete("/DeleteSalaryInformation/:id", async (req, res) => {
    const result = await UserService.deleteSalaryInformation(parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.post("/CreateTimeInformation", async (req, res) => {
    const result = await UserService.addTimeInformation(req.body);
    res.json({
        status: result
    })
})
indexRouter.get("/getAllTimeInformation", async (req, res) => {
    const result = await UserService.getAllTimeInformation();
    res.json({
        status: result
    })
})
indexRouter.put("/UpdateTimeInformation/:id", async (req, res) => {
    const result = await UserService.updateTimeInformation(req.body, parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.delete("/DeleteTimeInformation/:id", async (req, res) => {
    const result = await UserService.deleteTimeInformation(parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.post("/CreateWorkingHistory", async (req, res) => {
    const result = await UserService.addWorkingHistory(req.body);
    res.json({
        status: result
    })
})
indexRouter.get("/getAllWorkingHistory", async (req, res) => {
    const result = await UserService.getAllWorkingHistory();
    res.json({
        status: result
    })
})
indexRouter.put("/UpdateWorkingHistory/:id", async (req, res) => {
    const result = await UserService.updateWorkingHistory(req.body, parseInt(req.params.id));
    res.json({
        status: result
    })
})
indexRouter.delete("/DeleteWorkingHistory/:id", async (req, res) => {
    const result = await UserService.deleteWorkingHistory(parseInt(req.params.id));
    res.json({
        status: result
    })
})