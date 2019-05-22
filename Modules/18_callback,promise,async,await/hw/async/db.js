/* global Promise */

/**
 * Глобальная вероятность успеха для удобства тестирования
 */
const GLOBAL_PROPABILITY = .9;
const BAD_JSON_PROPABILITY = 0.1;

/**
 * Получить все записи из хранилища
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON 
 */
export const all = () => {
    return new Promise((resolve, reject) => {
         TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
            .then(() => {
                serverAnswer(articlesStorage)
                    .then((sAnswer) => {
                        resolve(sAnswer)
                    })
                    .catch((e) => {
                        reject(e)
                    })
            })
            .catch(() => {
                serverAnswer('', 100500, "All db Error")
                    .then((sAnswer) => {
                        reject(sAnswer)
                    })
                    .catch((e) => {
                        reject(e)
                    })
            })
    })
}

/**
 * Получить статью по id
 * @param {int} id Id статьи
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON 
 */
export const get = (id) => {
    return new Promise((resolve, reject) => {
        TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
            .then(() => {
                serverAnswer(articlesStorage[mapArticles[id]])
                    .then((sAnswer) => {
                        resolve(sAnswer)
                    })
                    .catch((e) => {
                        reject(e)
                    })
            })
            .catch(() => {
                serverAnswer('', 100500, "Get db Error")
                    .then((sAnswer) => {
                        reject(sAnswer)
                    })
                    .catch((e) => {
                        reject(e)
                    })
            })
    })
   
}

/**
 * Удалить статью из базы
 * @param {int} id Id статьи
 * @param {callable} onAnswer Функция, обрабатывающая ответ от сервера в формате JSON  
 */
export const remove = (id) => {
    return new Promise((resolve, reject) => {
        TimeoutPropabiliry(300, GLOBAL_PROPABILITY)
            .then(() => {
                if (id in mapArticles){
                    let num = mapArticles[id];
                    delete mapArticles[id];
                    articlesStorage.splice(num, 1);
                    serverAnswer(true)
                        .then((sAnswer) => {
                            resolve(sAnswer)
                        })
                        .catch((e) => {
                            reject(e)
                        })
                } else {
                    resolve(false)
                }
            })
            .catch(() => {
                serverAnswer('', 100500, "Remove db Error")
                    .then((sAnswer) => {
                        reject(sAnswer)
                    })
                    .catch((e) => {
                        reject(e)
                    })
            })
    })
    
}

/* полуприватная часть, вдруг захотите сделать промис :) */
export function TimeoutPropabiliry(time, probability){
    return new Promise ((resolve, reject) => {
        window.setTimeout(() => {
            Math.random() < probability ? resolve() : reject();
        }, time);
    })
}

function serverAnswer(data, code = 200, status = "OK"){
    return new Promise((resolve,reject) => {
       if(Math.random() < BAD_JSON_PROPABILITY){
        reject('incorrect json');
        }

        resolve(JSON.stringify({
            code, 
            status,
            data
        })) 
    })
}


/*  приватная часть */ 
let articlesStorage = [
    {
        id: 1,
        title: 'Профисификация кода',
        dt: '2018-12-06',
        text: 'Код без промисов бывает жестью, но и с ними можно изобразить много странного.'
    },
    {
        id: 2,
        title: 'Итераторы и генераторы',
        dt: '2018-12-01',
        text: 'Сначала пугают всех, кто к ним прикасается, а Symbol кажется бредом.'
    },
    {
        id: 5,
        title: 'Javascript',
        dt: '2018-12-02',
        text: 'Всё равно хороший язык программирования.'
    }
];

let mapArticles = {};

articlesStorage.forEach((item, i) => {
    mapArticles[item.id] = i;
});

