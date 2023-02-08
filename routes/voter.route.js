const express = require("express");
const {
    createVote,
    voteForCandidate,
  } = require("../controllers/voter.controller");

const router = express.Router();
router.post("/vote", createVote);
router.put("/vote/:id", voteForCandidate);
module.exports = router;