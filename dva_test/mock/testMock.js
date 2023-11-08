module.exports = {
    "GET /api/mockdata":(req, res)=>{
        console.log(req);
        res.send({
            // msg: "登录成功"
            msg:"测试成功",
            data:{
                data: [
                    {
                        name: "zgc",
                        age: 24,
                        sex: "man"
                    }
                ]
            }
        })
    }
}