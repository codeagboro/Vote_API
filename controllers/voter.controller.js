const voterecord = require("../module/voter.module");

// create a new candidate
exports.createVote = async (req, res) => {
    try {
        const { candidate } = req.body;
        const vote = await voterecord.create({
            candidate,
        });
        return res.status(201).json({
            message: "candidate created successfully",
            vote,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        });
    }
};

// vote for a candidate using the increment operator from mongoose
exports.voteForCandidate = async (req, res) => {
    try {
        const id = req.params.id;
        const vote = await voterecord.findByIdAndUpdate(
            id,
            {
                $inc: { voteCount: 1},
            },
            {
                new: true,
            }
        )
        return res.status(200).json({
            message: "Vote updated successfully",
            vote,})
    } catch (error) {
        return res.status(500).json({
        error: error.message,
    })
}
}