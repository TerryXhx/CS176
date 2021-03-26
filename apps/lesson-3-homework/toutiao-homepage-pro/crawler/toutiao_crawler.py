import requests
from lxml import etree
import json

headers = {
    'referer': 'https://www.toutiao.com/',
    'user-agent': r'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36 Edg/89.0.774.57',
    'cookie': r'tt_webid=6939060281084855815; csrftoken=182ed77340a516a34a91539e4db8a4b3; tt_webid=6939060281084855815; ttwid=1%7CREoqClTRXVOvkt9sVes8HSaE3J8Rr9WKA_PpU9gKmho%7C1615886993%7Cff8cc7a93e316eba75160295f1d878c80f588c161127d43f5d6a50e9a1a009c3; passport_csrf_token=590085919facfe84e4443e5608f31360; __ac_signature=_02B4Z6wo00f01rQwDCwAAIDBBMHg5G.GE7a0FAiAAM1qdyyYNFPcMc-stZFyI2nYY.HSwEdd8mKPMg03dUZmkmkg.1chaFTkgnNdIUDax8Ke6qTBNtf4a8a9C8jZ8wA40k63WeaaX0Esyd98a9; s_v_web_id=verify_kmm0jo7x_9hY7iY89_5x99_4mVU_9y1R_m7BjVpzKFEJw; MONITOR_WEB_ID=09b987b7-379c-40e7-9f02-fff95d69955b; tt_scid=MA37wPh8cMj8IoQ5qy-EDJgyu7wAtszl8L9gMcLPi0I.oR.Cd3v-FiJVONngrs1j6fe8'
}

def get_json(url, headers):
    response = requests.get(url, headers = headers)
    data = json.loads(response.text)
    return data

urls = [
    'https://www.toutiao.com/api/pc/feed/?min_behot_time=0&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&_signature=_02B4Z6wo00f01Iuv05gAAIDDO14.U5OA1oiLi9cAAEK2lpFqu9f0Ckz4OyHJTQNcY2o22JJn3bientSlcwcL60kUC1hXhs5tXYSZqi804EfTZF5o74NG8GN1yFl5DbaPXxmrD2SkQnEIbGzLcc',
    'https://www.toutiao.com/api/pc/feed/?max_behot_time=1616503672&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&_signature=_02B4Z6wo00d01GkczdwAAIDD2e0hFWZX0txpOMlAAHomMBsQSGQPCaHuvBjPqSdQhYRbntqCd4qogzEa.PZi.xq2IvcBYlO3y8yMMalp1pY7LzhvRN1.ZHrKs7DLI-qmBuNQQGfWeTDa2qbp58',
    'https://www.toutiao.com/api/pc/feed/?max_behot_time=1616501416&category=__all__&utm_source=toutiao&widen=1&tadrequire=true&_signature=_02B4Z6wo00d01-SPl4AAAIDAVH57S9bf1yPkq5MAAJmDMBsQSGQPCaHuvBjPqSdQhYRbntqCd4qogzEa.PZi.xq2IvcBYlO3y8yMMalp1pY7LzhvRN1.ZHrKs7DLI-qmBuNQQGfWeTDa2qbp9f'
]

json_data = []
for url in urls:
    json_data.append(get_json(url, headers))

merged_data = json_data[0]
for i in json_data[1: ]:
    merged_data['data'] += i['data']
    
with open('data.json', 'w', encoding='utf8') as json_file:
    json.dump(merged_data, json_file, ensure_ascii=False)