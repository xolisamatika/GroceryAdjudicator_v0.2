import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserModel } from '../models/user.model';
import { CONFIGURATION } from '../shared/app.constants';

@Injectable()
export class DataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http) {

        this.actionUrl = CONFIGURATION.baseUrls.server +
            CONFIGURATION.baseUrls.apiUrl +
            'users/';

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetAllUsers(): Observable<UserModel[]> {
        return this.http.get(this.actionUrl)
            .map((response: Response) => <UserModel[]>response.json())
            .catch(this.handleError);
    }

    public GetSingleUser = (id: number): Observable<UserModel> => {
        return this.http.get(this.actionUrl + id)
            .map((response: Response) => <UserModel>response.json())
            .catch(this.handleError);
    }

    public AddUser = (name: string): Observable<UserModel> => {
        let toAdd: string = JSON.stringify({ name: name });

        return this.http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <UserModel>response.json())
            .catch(this.handleError);
    }

    public Update = (id: number, userToUpdate: UserModel): Observable<UserModel> => {
        return this.http.put(this.actionUrl + id, JSON.stringify(userToUpdate), { headers: this.headers })
            .map((response: Response) => <UserModel>response.json())
            .catch(this.handleError);
    }

    public DeleteUser = (id: number): Observable<Response> => {
        return this.http.delete(this.actionUrl + id)
            .catch(this.handleError);;
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}