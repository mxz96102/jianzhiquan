# 兼职圈移动端接口
- 用户是否注册
  - <- GET {phone:"138********"}
  - ->  {result : "true"/"false"}
- 手机验证码接口视第三方而言
- 用户密码登录
  - <- POST {phone:"",passwd:""}
  - ->  {result : "true"/"false", confirm : "true"/"false"} //confirm为是否完成信息采集
- 注册用
  - <- POST {phone:"",passwd:"",school:""}
  - ->  {result : "true"/"false"}
- 完善信息用
  - <- POST {phone:"",gender:"",qq:"",college:"",grade:"",class:"",dormitory:"",willing:["",""]}
  - -> {result : "true"/"false"}
- 获取用户兼职
 - <- GET 不带参
 - -> {result:[{name:"",time:"",state:"",jobId:""},...]}
- 获取详细信息
 - <- GET {id:""}
 - -> {type:"",name:"",date:"",period:"",location:"",people:"",treat:"",require:"",jobId:""}
- 立即抢兼职
 - <- POST {jobId:""}
 - -> {result : "true"/"false"}
- 获取学校兼职
 - <- GET 不带参
 - -> {result:[{name:"",time:"",state:"",id:""},...]}
- 获取当前用户信息
 - <- GET 不带参
 - -> {name:"",avatar:"",phone:"",level:"",money:"",jobs:"",class:""}
- 获取用户钱包信息
 - <- GET 不带参
 - -> {sum:"",balance:"",notes:[{time:"",type:"",content:"",state:""},...]}
- 提现
 - <- POST {account:"",money:""}
 - -> {result : "true"/"false"}
- 获取兼职圈信息
 - <- GET 不带参
 - -> {user:"",circle:"",people:"",times:"",money:"",info:[{name:"",class:"",qq:"",times:"",money:""},...]}
- 获取班级总信息
 - <- GET 不带参
 - -> {info:[{college:"",grade:"",class:"",classid:"",contact:"",works:""}]}
- 获取个体班级信息
  - <- GET {classid:""}
  - -> {contact:[{status:"",name:"",phone:"",qq:"",dormitory:""},...],data:[name:"",num:"",money:"",type:""]}
- 新增信息
 - <- POST {type:"",money:"",about:""}
 - -> {result : "true"/"false"}
- 获取成交信息
 - <- GET {classid:"",type:""}
 - -> {result:[{type:"",money:"",about:""},...]}
- 新增班级
  - <- POST {college:"",grade:"",class:""}
  - -> {result : "true"/"false"}
