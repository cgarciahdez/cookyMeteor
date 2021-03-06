import React, { Component } from 'react';
import { Table, Button, Well } from 'react-bootstrap';
import Ingredient from './ingredient.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import HoverBox  from 'react-hoverbox';

class Recipe extends Component {

<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    deleteRecipe(titleR){
//Deberían usar meteor para el manejo de collections
          console.log("nickName: "+this.props.username);
            axios.post(ROOT_URL+"/recipes/deleteRecipe",{
              nickName: this.props.username,
              password: this.props.password,
              title: titleR
            }
          ).then(response => {
            console.log("BORROOOO"+response),
            this.props.getRecipes()
          })
        }
=======
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  deleteRecipe() {
    Meteor.call('recipes.remove', this.props.recipe._id);
  }
>>>>>>> upstream/master

  like() {
    Meteor.call('recipesLike.update', this.props.recipe._id);
  }
  render() {
    return (
      <div className="col-md-6 recipe">
            <Well>
              <h3 className="orange head">
                {this.props.recipe.title}
              </h3>
              <Table condensed hover>
                <tbody>
              <HoverBox render = {hover => (
                  hover?
                      <iframe width="420" height="315"
                      src={this.props.recipe.pictureGif.replace("watch?v=", "embed/")}>
                      </iframe>
                    :
                      <div><tr>
                        <td>
                          <h4 className="bold bod">
                            <i className="fa fa-child" aria-hidden="true" /> Cook
                          </h4>
                          <p>{this.props.recipe.username}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h4 className="bold bod">
                            <i className="fa fa-lemon-o" aria-hidden="true" /> Ingredientes
                          </h4>
                          <p>
                            {this.props.ingredients.map(ingredient =>{
                              return (
                                <ul key={ingredient.ingrediente}>
                                  <Ingredient name={ingredient.ingrediente}/>
                                </ul>
                              );
                            })}
                          </p>
                        </td>
                      </tr></div>

              )}/>
              <tr>
                <td>
                  <h4 className="bold bod">
                    <i className="fa fa-list-ol" aria-hidden="true" /> Instrucciones
                  </h4>
                  <p>{this.props.recipe.description}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <Button className="center" onClick={() => {this.like()}}>
                    {this.props.recipe.likes} <i className="fa fa-thumbs-o-up" aria-hidden="true"> </i>
                  </Button>
                  {' '}
                  {this.props.showDelete?
                    <Button bsStyle="danger" onClick={() => {this.deleteRecipe()}}>
                      <i className="fa fa-trash" aria-hidden="true" /> Borrar
                    </Button>:''}
                </td>
              </tr>
            </tbody>
          </Table>
            </Well>
      </div>
    );
  }
}

export default Recipe;
