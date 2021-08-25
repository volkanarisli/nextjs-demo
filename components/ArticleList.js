import articleStyles from '../styles/Article.module.css'
import ArticleItem, { ArtileItem } from './ArticleItem'

const ArticleList = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article, index) => <ArtileItem key={index} article={article} />)}
        </div>
    )
}

export default ArticleList
