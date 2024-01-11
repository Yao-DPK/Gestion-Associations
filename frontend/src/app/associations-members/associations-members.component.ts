import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-associations-members',
  templateUrl: './associations-members.component.html',
  styleUrls: ['./associations-members.component.css']
})
export class AssociationsMembersComponent implements OnInit {
  constructor(
    private httpClientService: HttpClient,
    private activatedRoute: ActivatedRoute,
    private appRouter: Router
  ) {}

  displayedColumns: string[] = ['name', 'firstname', 'age', 'role', 'action'];
  membersData = [];
  associationName!: string;
  associationId: number=1;
  memberIds!: number[];

  isMemberDeleted: boolean = false;
  isRoleSelected: boolean = false;
  newRoleName!: string;
  selectedUserId!: number;

  errorMessage: string | undefined;

  // Modify Role
  roleModificationForm = new FormGroup({
    roleControl: new FormControl()
  });
  isModifyingRole: boolean = false;

  // Add Member
  isAddingMember: boolean = false;
  memberIdToAdd!: number;
  roleNameToAdd!: string;
  addMemberForm = new FormGroup({
    memberIdControl: new FormControl(),
    roleControl: new FormControl()
  });

  ngOnInit() {
    this.isModifyingRole = false;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      console.log(Number(params.get('associationId')));
      let associationId = params.get('associationId');
      this.associationId = Number(associationId)+1;
    });

    this.httpClientService.get<any>('http://localhost:3000/associations/' + this.associationId).subscribe(res => {
      this.associationName = res.name;
    });

    this.httpClientService.get<any>('http://localhost:3000/associations/' + this.associationId + '/members').subscribe(res => {
      this.membersData = res;
    });

    this.roleModificationForm.get('roleControl')?.valueChanges.subscribe(res => {
      this.newRoleName = res.toString();
    });

    this.addMemberForm.get('memberIdControl')?.valueChanges.subscribe(res => {
      this.memberIdToAdd = res.toString();
    });

    this.addMemberForm.get('roleControl')?.valueChanges.subscribe(res => {
      this.roleNameToAdd = res.toString();
    });
  }

  addMember(): void {memberIdControl: new FormControl(),
    this.isAddingMember = true;
  }

  modifyRole() {
    this.isModifyingRole = true;
    this.selectedUserId = this.associationId;
  }

  updateRole(id:number) {
    this.isModifyingRole = true;
    let updatedRoleData = { name: this.newRoleName };
    this.httpClientService.put('http://localhost:3000/roles/' + this.selectedUserId + '/' + this.associationId, updatedRoleData)
      .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      });
  }

  saveNewMember() {
    const newMemberData = { idUser: this.memberIdToAdd, idAssociation: this.associationId, name: this.roleNameToAdd };
    this.httpClientService.post('http://localhost:3000/roles/', newMemberData)
      .subscribe(res => {});

    this.memberIds.push(this.memberIdToAdd);
    const updatedAssociationData = { name: this.associationName, idUsers: this.memberIds };
    this.httpClientService.put('http://localhost:3000/associations/' + this.associationId, updatedAssociationData)
      .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      });
  }

  deleteMember(memberIndex: number) {
    this.memberIdToAdd = this.memberIds[memberIndex];
    this.httpClientService.delete('http://localhost:3000/roles/' + this.memberIdToAdd + '/' + this.associationId)
      .subscribe(res => {});

    let indexToDelete = this.memberIds.indexOf(memberIndex);
    this.memberIds.splice(indexToDelete, 1);

    const updatedAssociationData = { name: this.associationName, idUsers: this.memberIds };
    this.httpClientService.put('http://localhost:3000/associations/' + this.associationId, updatedAssociationData)
      .subscribe(res => {
        console.log(res);
        this.ngOnInit();
      });
  }
}
