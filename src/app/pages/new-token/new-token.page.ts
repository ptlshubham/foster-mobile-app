import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TokenCalenderPage } from 'src/app/token-calender/token-calender.page';


@Component({
  selector: 'app-new-token',
  templateUrl: './new-token.page.html',
  styleUrls: ['./new-token.page.scss'],
})
export class NewTokenPage implements OnInit {
  clients: { value: string, clientName: string }[] = [
    {
      clientName: 'Shiv Dugdhalay',
      value: '1',
    },
    {
      clientName: 'GuruKrupa Jewellers',
      value: '2',
    },
    {
      clientName: 'Infinity Cinema',
      value: '3',
    },
    {
      clientName: 'Sumeru Academy',
      value: '4',
    },
    {
      clientName: 'New Anand Sport',
      value: '5',
    },
    {
      clientName: 'R & S Cinema',
      value: '6',
    },
    {
      clientName: 'Grill Kitchen Manjalpur',
      value: '7',
    },
    // Add more clients as needed
  ];

  manager: { value: string, managerName: string }[] = [
  {
    managerName : 'Divyangi Soni',
    value : '1',
  },
  {
    managerName : 'Harshil Amin',
    value : '2',
  },
  ];
   
  designer : { value: string, designerName: string }[] = [
    {
      designerName : 'Priya Dave',
      value : '1',
    },
    {
      designerName : 'Vishal Prajapati',
      value : '2',
    },
    {
      designerName : 'Yaksh Patel',
      value : '3',
    },
    {
      designerName : 'Marvin Parmar',
      value : '4',
    },
    {
      designerName : 'Kishan Panchal',
      value : '5',
    },
    {
      designerName : 'Jenish Vaghela',
      value : '6',
    },
    {
      designerName : 'Mahir Rana',
      value : '7',
    },
    ];

   label : { value: string, label: string }[] = [
    {
      label : 'CES',
      value : '1',
    },
    {
      label : 'Urgent',
      value : '2',
    },
   ];

  visibleOptions: { value: string, label: string }[] = [];
  selectedDate: string;
    modalController: any;


  constructor(private modalCtrl: ModalController) {
    this.loadVisibleOptions();
    this.selectedDate = new Date().toISOString();
  }

  async handleTokencalender(){
    const modal = await this.modalController.create({
      component: TokenCalenderPage,
      cssClass: "custom_modal_bottom",
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  loadVisibleOptions() {
    // Load initial set of options (first 5)
    this.visibleOptions = this.clients.slice(0, 5).map(client => ({
      value: client.value,
      label: client.clientName
    }));
  }

  loadMoreOptions(event: any) {
    const startIndex = this.visibleOptions.length;
    const newOptions = this.clients.slice(startIndex, startIndex + 5).map(client => ({
      value: client.value,
      label: client.clientName
    }));
    this.visibleOptions = this.visibleOptions.concat(newOptions);

    // Complete the infinite scroll action
    event.target.complete();

    // Disable infinite scroll if all options are loaded
    if (this.visibleOptions.length >= this.clients.length) {
      event.target.disabled = true;
    }
  }

  ngOnInit() {}

  onSelectChange(event: any) {
    console.log('Selected value:', event.detail.value);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
