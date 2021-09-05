import { Component } from '@angular/core';
import {
  faLaugh, faKiss, faFrown, faFlushed, faCarrot, faHamburger, faLemon, faHotdog, faCheese,
  faCookie, faEgg, faCoffee, faIceCream, faBus, faRocket, faShip, faCar, faMotorcycle, faTruck
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridOne: any;
  gridTwo: any;
  gridThree: any;
  grids = [
    {
      id: 1, name: "2x2", grid2x2: false,
      box: [
        { val: faLaugh, color: '#F6FEA1' },
        { val: faKiss, color: '#FFB270' },
        { val: faFrown, color: '#F08E6B' },
        { val: faFlushed, color: '#FF7575' },
      ]
    },
    {
      id: 2, name: "3x3", grid3x3: false,
      box: [
        { val: faCarrot, color: '#E8252C' },
        { val: faHamburger, color: '#E8C754' },
        { val: faLemon, color: '#31A2E8' },
        { val: faHotdog, color: '#3144E8' },
        { val: faCheese, color: '#9E0093' },
        { val: faCookie, color: '#E83C41' },
        { val: faEgg, color: '#E88D0E' },
        { val: faCoffee, color: '#6A02E8' },
        { val: faIceCream, color: '#2DEB66' },
      ]
    },
    {
      id: 3, name: "2x3", grid2x3: false,
      box: [
        { val: faBus, color: '#EB7878' },
        { val: faRocket, color: '#2F3E75' },
        { val: faShip, color: '#F3E595' },
        { val: faCar, color: '#D0EFB5' },
        { val: faMotorcycle, color: '#31A2E8' },
        { val: faTruck, color: '#F2A365' },
      ]
    },
  ];

  submitGridSize(form: any) {
    if (form.value.gridSize === '1') {
      this.gridOne = Number(form.value.gridSize);
      this.grids.forEach(grid => {
        grid.grid2x2 = true;
        grid.grid3x3 = false;
        grid.grid2x3 = false;
      });
    }
    else if (form.value.gridSize === '2') {
      this.gridTwo = Number(form.value.gridSize);
      this.grids.forEach(grid => {
        grid.grid3x3 = true;
        grid.grid2x2 = false;
        grid.grid2x3 = false;
      });
    }
    else if (form.value.gridSize === '3') {
      this.gridThree = Number(form.value.gridSize);
      this.grids.forEach(grid => {
        grid.grid2x3 = true;
        grid.grid2x2 = false;
        grid.grid3x3 = false;
      });
    }
  }
}
