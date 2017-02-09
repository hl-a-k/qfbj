const request = require('request');
const zlib = require('zlib');
const stream = require('stream');
const fs = require('fs');
var headers = {
    'Accept-Language': 'zh-CN,zh;q=0.8,en;q=0.6',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.76 Safari/537.36',
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Referer': 'http://baidu.lecai.com/lottery/draw/sorts/cqssc.php?agentId=5591',
    'X-Requested-With': 'XMLHttpRequest',
    'Connection': 'keep-alive',
    'Cookie': '_lcas_uuid=1481464224; _lhc_uuid=sp_5899d0ea4f7ad3.20321800; _adwp=110406678.3659002257.1486475498.1486555666.1486557914.3; _adwb=110406678; _adwc=110406678; _adwr=110406678%23https%253A%252F%252Fwww.baidu.com%252Flink%253Furl%253D8yaILu3tLXihQsZE9Apd8uuFl3H9y12ioRiAQU8ziUcgTv_DBKCzpJefAEOuz2g9qRc3ywxAMjE_X6wDsvLjVQJ7xnfliG1ag74Rjs6hK-_%2526wd%253D%2526eqid%253Db5bd1638000101de00000006589b12d5; Hm_lvt_9b75c2b57524b5988823a3dd66ccc8ca=1486555682,1486555687,1486555708,1486557915; Hm_lpvt_9b75c2b57524b5988823a3dd66ccc8ca=1486557915; Hm_lvt_6c5523f20c6865769d31a32a219a6766=1486555682,1486555687,1486555709,1486557915; Hm_lpvt_6c5523f20c6865769d31a32a219a6766=1486557915; _source=5591; _source_pid=0; _srcsig=ccbdb96c; lehecai_request_control_stats=2'
};

var options = {
    url: 'http://baidu.lecai.com/lottery/draw/sorts/ajax_get_draw_data.php?lottery_type=200&date=2017-02-05',
    headers: headers
};

function callback(error, response,body) {
    if (!error && response.statusCode == 200) {

        var rz = JSON.parse(body)
        console.log(body)
        console.log(rz.data.data[0])

    }
}

request(options, callback);
