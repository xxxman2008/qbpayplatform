const ErrorCode = {
	0: '接口正常执行',
	1: '服务器端错误',
	2: '用户未登录。Un-Authentication',
	3: '用户授权失败（即没有权限）。Un-Authorization',
	4: '可疑的非法请求',
	5: '未知错误，人类智慧之外的过滤条件没有满足的错误。',
	6: '后台处理流程较为繁忙，请稍候再试。',
	7: '可动态修改错误描述的错误码。',
	10: '暂时无可用的通道/支付卡/等等',
	11: '目前不 开放/启用/使用/支持 此功能',
	12: '没有可用的物料，无法完成支付任务',
	13: '无可用业务处理逻辑，可能的原因是技术文档错误，或者是。。。',
	99: '请求的通道繁忙，请稍后重试。',
	100: '请检查调用的接口路径后再次尝试，或者请联系我方的技术人员提供必要的帮助。',
	101: '接口参数未符合要求',
	102: '必选参数存在非法值',
	103: '签名错误',
	104: '不支持请求的通道（收款方式），可能的原因有：通道名称错误或者请求的支付数量无通道可以支持。',
	105: '不支持请求的支付方式',
	106: '指定的通道ID不存在',
	107: '指定的订单ID不存在',
	108: '用户不存在或者已经被禁用',
	109: '订单金额不能为整数（不能被10整除）',
	110: '账户的可提现余额不足。',
	111: '无此验证码。',
	112: '短信发送次数过多，暂停24小时。',
	113: '短信发送间隔未到60秒。请稍后重试。',
	114: '短信发送错误，请稍后重试。',
	115: '推荐人不存在。',
	200: '用户支付成功',
	201: '二维码已经过期，终端未扫码',
	202: '用户已经扫码，但在超时时间内，系统未能收到支付成功票据',
	203: '由于支付接口限制，无法分辨的支付失败状况',
	204: '支付接口金额限制',
	205: '指定的卡号不存在',
	206: '指定的商品不存在',
	207: '指定的店铺不存在',
	208: '查询的信息可能是你的，也可能是他的，还可能是属于全人类的，但是归根到底，你是不知道的。',
	209: '无可用支付码，请稍后再试',
	210: '此订单号已经使用，请勿重复尝试。',
	211: '无此IMEI对应的信息。',
};

module.exports = ErrorCode;