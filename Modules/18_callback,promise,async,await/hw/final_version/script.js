import 'babel-polyfill'

import * as ArticlesModel from './articles';

const testArticlesModel = async() => {
    let articlesAll = await ArticlesModel.all()
    console.log('articles count = ' + articlesAll.length)

    // берём случайный индекс
    let ind = Math.floor(Math.random() * articlesAll.length);
    console.log('select index ' + ind + ', id = ' + articlesAll[ind].id)

    // получаем статью по id
    const articlesOne = await ArticlesModel.one(articlesAll[ind].id)
    console.log(articlesOne)

    // пробуем удалить её
    const articlesRemove = await ArticlesModel.remove(articlesOne.id)
    console.log('что с удалением? - ' + articlesRemove);

    // а сколько статей в базе сейчас
    articlesAll = await ArticlesModel.all()
    console.log('articles count = ' + articlesAll.length);
}

testArticlesModel()
    // .then(() => {})
    .catch((e) => {
        document.querySelector('body .item').innerHTML += `${e.message}`
        console.log(e.stack)
    })















// ArticlesModel.all((articles) => {
//     console.log('articles count = ' + articles.length);
    
//     // берём случайный индекс
//     let ind = Math.floor(Math.random() * articles.length);
//     console.log('select index ' + ind + ', id = ' + articles[ind].id)

//     // получаем статью по id
//     ArticlesModel.one(articles[ind].id, (article) => {
//         console.log(article);

//         // пробуем удалить её
//         ArticlesModel.remove(article.id, (res) => {
//             console.log('что с удалением? - ' + res);

//             // а сколько статей в базе сейчас
//             ArticlesModel.all((articles) => {
//                 console.log('articles count = ' + articles.length);
//             }, (error) => {
//                 console.log(error + ' in articles list after delete');
//             });
//         }, (error) => {
//             console.log(error + ' in articles delete');
//         })

//     }, (error) => {
//         console.log(error + ' in articles one');
//     });

// }, (error) => {
//     console.log(error + ' in articles list');
// });