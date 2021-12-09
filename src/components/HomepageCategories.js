//import GameStatsStyle from './gamestats.css';
import {  GrFormNext, FaSearch } from "react-icons/fa";
import "../styles/categories.css";

const data =  [
    {
    name: 'Category1',
    id: 1,
    description: 'Course about light basics'
    },
    {
        name: 'Category2',
        id: 2,
        description: 'Course about stage basics'
        }
    ]


function HomepageCategories() {
    return (
      <div>
        <div class="flexbox">
          <div class="categoryBox">
            <div style={{ flex: 3 }}>
              <h4>Paloturvallisuus</h4>
            </div>
          </div>

          <div class="categoryBox">
            <div style={{ flex: 3 }}>
              <h4>Työkalut</h4>
            </div>
          </div>

          <div class="categoryBox">
            <div style={{ flex: 3 }}>
              <h4>Henkilösuojaimet</h4>
            </div>
          </div>

          <div class="categoryBox">
            <div style={{ flex: 3 }}>
              <h4>Varoitusmerkit</h4>
            </div>
          </div>

          <div class="categoryBox">
            <div style={{ flex: 3 }}>
              <h4>Henkilönostimet</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default HomepageCategories;