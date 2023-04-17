
import { useState } from "react"
import { PostCard } from "../Posts/PostCard"


export function Category({ categories }) {
    var [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
    function activateTab(categoryId) {
        setActiveCategoryId(categoryId);
    }
    return (

        <div id="exTab1" class="container">
            <nav>
                <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                    {
                        categories.map((category) => (
                            <button class={"nav-link " + (activeCategoryId == category.id ? "active" : "")} onClick={() => activateTab(category.id)} id={category.id} data-bs-toggle="tab" data-bs-target={category.name} type="button" role="tab" aria-controls="nav-home" aria-selected="true">{category.name}</button>
                        ))
                    }
                </div>
            </nav>

            <div class="tab-content clearfix" id="nav-tabContent">
                {
                    categories.map((category, index) => (
                        <div className={"tab-pane fade " + (activeCategoryId == category.id ? "active show" : "")} key={index} id={category.name} role="tabpanel" aria-labelledby={category.name}>
                            {
                                category.posts.length == 0 ?
                                <div></div> :
                                <div className="row"> {
                                    category.posts.map((post) => (
                                        <div className="col-md-6">
                                            <PostCard post={post}></PostCard>
                                        </div>
                                    ))
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
            </div>
        </div>

    )

}

