/**
 * Express router for handling comment-related API endpoints
 * @type {Express.Router}
 */

/**
 * Retrieves all comments sorted by creation date in descending order
 * @route GET /
 * @returns {Promise<Object[]>} Array of comment objects sorted by createdAt descending
 * @throws {Error} Returns 500 status with error message if query fails
 */

/**
 * Deletes a comment by its ID
 * @route DELETE /:id
 * @param {string} req.params.id - The MongoDB ID of the comment to delete
 * @returns {Promise<Object>} Success message object
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

router.get("/", (req, res) => {
  Comment.find()
    .sort({ createdAt: -1 })
    .then((comments) => res.json(comments))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

