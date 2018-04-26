import request from '../ApiCentral';


function getListOfNews(currentPage) {
    return request({
        url: 'sources',
        method: 'GET'
    });
}

const NewsListService = {
    getListOfNews
}

export default NewsListService;