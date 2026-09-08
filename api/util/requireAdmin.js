function requireAdmin(req, res, next) {
    // 1. Ensure the user is authenticated (populated by your auth middleware)
    if (!req.username) {
        return res.status(403).json({ error: "Forbidden: Must have admin privelege to access." });
    }
    // 3. User is admin, proceed to the next function
    next();
}

module.exports = requireAdmin;