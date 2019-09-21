import React from "react";
import Mv from "./Video/Mv";
import Recommend from "./Video/Recommend";
import Scene from "./Video/Scene";
import { Card } from 'antd';
import {
    BrowserRouter as Router,
    NavLink,
    Route
} from "react-router-dom"
export default class Goods extends React.Component{
    render(){
        return (
            <div>
                const tabList = [
                {
                    key: 'tab1',
                    tab: 'tab1',
                },
                {
                    key: 'tab2',
                    tab: 'tab2',
                },
                ];

                const contentList = {
                tab1: <p>content1</p>,
                tab2: <p>content2</p>,
            };

                const tabListNoTitle = [
                {
                    key: 'article',
                    tab: 'article',
                },
                {
                    key: 'app',
                    tab: 'app',
                },
                {
                    key: 'project',
                    tab: 'project',
                },
                ];

                const contentListNoTitle = {
                article: <p>article content</p>,
                app: <p>app content</p>,
                project: <p>project content</p>,
            };

                class TabsCard extends React.Component {
                state = {
                    key: 'tab1',
                    noTitleKey: 'app',
                };

                onTabChange = (key, type) => {
                console.log(key, type);
                this.setState({ [type]: key });
            };

                render() {
                return (
                <div>
                <Card
                style={{ width: '100%' }}
                title="Card title"
                extra={<a href="#">More</a>}
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={key => {
                    this.onTabChange(key, 'key');
                }}
                >
                {contentList[this.state.key]}
                </Card>
                <br />
                <br />
                <Card
                style={{ width: '100%' }}
                tabList={tabListNoTitle}
                activeTabKey={this.state.noTitleKey}
                tabBarExtraContent={<a href="#">More</a>}
                onTabChange={key => {
                    this.onTabChange(key, 'noTitleKey');
                }}
                >
                {contentListNoTitle[this.state.noTitleKey]}
                </Card>
                </div>
                );
            }
            }

                ReactDOM.render(<TabsCard />, mountNode);

            </div>
        )
    }
}


