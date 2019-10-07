const comments = ['test','test2'];

module.exports ={
  
  getComments(req,res){
    res.status(200).send(comments)
  },
  addComment(req,res){
    let { comment } = req.body;
    comments.push(comment)
    res.status(200).send(comments)
  },
  deleteComment(req,res){
    let { index } = req.params;
    comments.splice(index, 1)
    res.status(200).send(comments)
  }
}