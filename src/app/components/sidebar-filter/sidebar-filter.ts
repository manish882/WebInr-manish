import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbAccordionModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar-filter',
  imports: [NgbAccordionModule,NgbDropdownModule,NgbAccordionModule,FormsModule,CommonModule],
  templateUrl: './sidebar-filter.html',
  styleUrl: './sidebar-filter.scss'
})
export class SidebarFilter {
 searchTerm = '';
  specialties = [
    'Accupuncture',
    'Allergy and Immunology',
    'Anaesthesiology',
    'Clinical Nutrition',
    'General Practitioner'
  ];
  selected: { [key: string]: boolean } = {};

  get filteredSpecialties(): string[] {
    const term = this.searchTerm.toLowerCase();
    return this.specialties.filter(item =>
      item.toLowerCase().includes(term)
    );
  }

}
