import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { UtilService } from "src/app/services/util.service";
import { ClientDashboardTodoListPage } from "../client-dashboard-todo-list/client-dashboard-todo-list.page";
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  modules = [
    {
      img: "assets/icon/icon-gif/employee.gif",
      moduleName: "Employee List",
      number: 18,
    },
    {
      img: "assets/icon/icon-gif/complete.gif",
      moduleName: "Complete Token",
      number: 133,
    },
    {
      img: "assets/icon/icon-gif/incomplete.gif",
      moduleName: "Pending Token",
      number: 5,
    },
    {
      img: "assets/icon/icon-gif/client.gif",
      moduleName: "Total Client",
      number: 46,
    },
    {
      img: "assets/icon/icon-gif/ces-complete.gif",
      moduleName: "CES Token Com...",
      number: 0,
    },
    {
      img: "assets/icon/icon-gif/incomplete-ces.gif",
      moduleName: "CES Incompleted",
      number: 0,
    },
    {
      img: "assets/icon/icon-gif/processing.gif",
      moduleName: "Processing Token",
      number: 7,
    },
    {
      img: "assets/icon/icon-gif/daily.gif",
      moduleName: "Daily Work",
      number: 704,
    },
  ];

  todos = [
    {
      name: "Angela Young",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "Angela Young",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "Angela Young",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "Angela Young",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "Angela Young",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "hdsgvf b uihg ",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "hdsgvf b uihg ",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "hdsgvf b uihg ",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "hdsgvf b uihg ",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    {
      name: "hdsgvf b uihg ",
      message: "Hello, How can I help you",
      date: "11/11/2022",
    },
    // Add more items to this list
  ];

  paginatedTodos = [];
  currentPage = 1;
  itemsPerPage = 5; // Change this value based on your preference
  totalPages = 1;

  constructor(
    private modalController: ModalController,
    private router: Router,
    public util: UtilService
  ) {}




  ngOnInit() {
    this.calculateTotalPages();
    this.loadPaginatedTodos();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.todos.length / this.itemsPerPage);
  }

  loadPaginatedTodos() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedTodos = this.todos.slice(start, end);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPaginatedTodos();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPaginatedTodos();
    }
  }

  async goToClientDashboardTodoList() {
    const modal = await this.modalController.create({
      component: ClientDashboardTodoListPage,
      cssClass: "custom_modal_bottom",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  goToFind() {
    this.router.navigate(["find"]);
  }

  goToSalonDetail() {
    this.router.navigate(["salon-details"]);
  }

  goToNotification() {
    this.router.navigate(["notification"]);
  }

  onClick() {}
}
