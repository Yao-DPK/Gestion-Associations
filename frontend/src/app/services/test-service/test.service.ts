import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface Test {
    title: string;
}

@Injectable({
    providedIn:"root"
})

export class TestService {
    constructor(private http: HttpClient) {}

    getTest(): Observable<Test> {
        return this.http.get<Test>('http://backend:3000')
    }
}