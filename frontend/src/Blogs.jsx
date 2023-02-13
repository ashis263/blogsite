import Header from './Header';
import React, {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import moment from 'moment';

export default function Blogs()
{
    const [data, setData] = useState([]);
    useEffect(() =>{
        const fetchData = async () => {
            let result = await fetch("http://127.0.0.1:8000/api/blogs");
            let json = await result.json();
            setData(json);
        }
        fetchData();
    }, []);
    return(
        <div>
                <Header />
                    <br />
                    <h1 align="center">Recently Posted Blogs</h1>
                    <br />
                    <br />
                    {data.map((blog,index) =>
                        <div key={index}>
                            <Card className="card mx-auto" border="light" style={{ width: '65rem' }}>
                                <div>
                                    <Card.Header>
                                        <h4>{blog.title}</h4>
                                        <p className="blogContent">By <b>{blog.user.name}</b> at {moment(blog.user.updated_at).format("LLLL")}</p>
                                    </Card.Header>
                                    <Card.Body>
                                    <p>{blog.description}</p>
                                    </Card.Body>
                                </div>
                            </Card>
                            <br />
                            <br />
                            <br />
                        </div>
                    )}
        </div>
        )
    }