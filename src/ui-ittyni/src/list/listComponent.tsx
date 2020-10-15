import * as React from 'react';
import * as List from './list'
import { Badge } from '../badge/badge';


interface IListComponentProps {
    listTitle: string
    data?: ListData[]
}

const ListComponent: React.FC<IListComponentProps> = ({ listTitle, data }) => {

    if (data){
        
        return (data.length > 0 &&
                <List.Container itemscope itemtype="http://schema.org/ItemList">

                    <h1>{listTitle}</h1>

                    {data.map((item: ListData) =>
                        <List.Item key={item.abbr}>

                            {/* abbriviation word for the item  or item icon */}
                            <List.ItemAbbr>
                                <h3>{item.abbr}</h3>
                            </List.ItemAbbr>

                            {/* content of item header description */}
                            <List.ItemContent>

                                <List.ItemContentTitle>
                                    <h2>{item.title}</h2>
                                </List.ItemContentTitle>

                                <List.ItemContentDescription>
                                    {verifyAndMapArray(item.specimen.anticoagulant)}
                                    {verifyAndMapArray(item.specimen.nature)}
                                    {item.specimen.numberoftube ? 
                                        <Badge>
                                            {item.specimen.numberoftube} tube {item.specimen.tubeColor } 
                                        </Badge> : ''}
                                        
                                    {item.specimen.volumemin ? <Badge> {item.specimen.volumemin} ml</Badge> : ''}
                                </List.ItemContentDescription>

                            </List.ItemContent>

                            {/* options prices codes and others herreee */}
                            <List.ItemOptions>
                                <List.ItemOptionsData>
                                </List.ItemOptionsData>

                                <List.ItemOptionsFinance>
                                    <div><span><h3>{item.price} dhs</h3></span></div>
                                    <div><h3>B {item.bcode}</h3></div>
                                </List.ItemOptionsFinance>
                            </List.ItemOptions>

                        </List.Item>
                    )}
                </List.Container>
            ) || (<div>loading....</div>)
    }  else {
        return (<div>loading....</div>)
    }
};

export default ListComponent;


const verifyAndMapArray = (arr? : string[] ) =>{

    if(arr){
        return(
            (arr.length <= 0 && <></>)
            ||
            (arr.length > 0 && <>
                {arr.map((item) =>
                    ((item==='Serum' || item==='Sérum')&& <Badge key={item} bgcolor="#FDD835">{item}</Badge>)
                    ||
                    ((item==='Plasma' && <Badge key={item} bgcolor="#FF9800">{item}</Badge>))
                    ||
                    (<Badge key={item} bgcolor="#FDD835">{item}</Badge>)
                )}
            </>)
        )

    } else {

    return(
        <>
        </>
    )
}}