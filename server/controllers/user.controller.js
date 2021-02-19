export function allAccess(req, res) {
  res.status(200).send("Public Content");
}

export function userBoard(req, res) {
  res.status(200).send("User content");
}

export function adminBoard(req, res) {
  res.status(200).send("Admin content");
}

export function moderatorBoard(req, res) {
  res.status(200).send("Moderator content");
}