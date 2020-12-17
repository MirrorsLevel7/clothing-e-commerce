import CollectionItem from './CollectionItem';
import '../styles/Preview.scss'


const Preview = ({title, items})=>{
    return(
        <div className='collection-preview'>
            <h1 classNameq='title'>{title}</h1>
            <div className='preview'>
                {items.filter((item, idx)=> idx < 4).map(({id, ...items})=>(
                    <CollectionItem key={id} {...items}/>
                 ))}
            </div>    
        </div>
    )
}

export default Preview;