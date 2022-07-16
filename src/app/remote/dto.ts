export class ApplicationInfoDto implements IApplicationInfoDto {
  version: string | undefined;
  releaseDate: Date;
  features: { [key: string]: boolean; } | undefined;

  constructor(data?: IApplicationInfoDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.version = _data["version"];
      this.releaseDate = _data["releaseDate"] ? new Date(_data["releaseDate"].toString()) : <any>undefined;
      if (_data["features"]) {
        this.features = {} as any;
        for (let key in _data["features"]) {
          if (_data["features"].hasOwnProperty(key))
            (<any>this.features)[key] = _data["features"][key];
        }
      }
    }
  }

  static fromJS(data: any): ApplicationInfoDto {
    data = typeof data === 'object' ? data : {};
    let result = new ApplicationInfoDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["version"] = this.version;
    data["releaseDate"] = this.releaseDate ? this.releaseDate.toISOString() : <any>undefined;
    if (this.features) {
      data["features"] = {};
      for (let key in this.features) {
        if (this.features.hasOwnProperty(key))
          (<any>data["features"])[key] = (<any>this.features)[key];
      }
    }
    return data;
  }

  clone(): ApplicationInfoDto {
    const json = this.toJSON();
    let result = new ApplicationInfoDto();
    result.init(json);
    return result;
  }
}

export interface IApplicationInfoDto {
  version: string | undefined;
  releaseDate: Date;
  features: { [key: string]: boolean; } | undefined;
}

export class AuthenticateModel implements IAuthenticateModel {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean;

  constructor(data?: IAuthenticateModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.userNameOrEmailAddress = _data["userNameOrEmailAddress"];
      this.password = _data["password"];
      this.rememberClient = _data["rememberClient"];
    }
  }

  static fromJS(data: any): AuthenticateModel {
    data = typeof data === 'object' ? data : {};
    let result = new AuthenticateModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["userNameOrEmailAddress"] = this.userNameOrEmailAddress;
    data["password"] = this.password;
    data["rememberClient"] = this.rememberClient;
    return data;
  }

  clone(): AuthenticateModel {
    const json = this.toJSON();
    let result = new AuthenticateModel();
    result.init(json);
    return result;
  }
}

export interface IAuthenticateModel {
  userNameOrEmailAddress: string;
  password: string;
  rememberClient: boolean;
}

export class AuthenticateResultModel implements IAuthenticateResultModel {
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number;
  userId: number;

  constructor(data?: IAuthenticateResultModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.accessToken = _data["accessToken"];
      this.encryptedAccessToken = _data["encryptedAccessToken"];
      this.expireInSeconds = _data["expireInSeconds"];
      this.userId = _data["userId"];
    }
  }

  static fromJS(data: any): AuthenticateResultModel {
    data = typeof data === 'object' ? data : {};
    let result = new AuthenticateResultModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["accessToken"] = this.accessToken;
    data["encryptedAccessToken"] = this.encryptedAccessToken;
    data["expireInSeconds"] = this.expireInSeconds;
    data["userId"] = this.userId;
    return data;
  }

  clone(): AuthenticateResultModel {
    const json = this.toJSON();
    let result = new AuthenticateResultModel();
    result.init(json);
    return result;
  }
}

export interface IAuthenticateResultModel {
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number;
  userId: number;
}

export class ChangePasswordDto implements IChangePasswordDto {
  currentPassword: string;
  newPassword: string;

  constructor(data?: IChangePasswordDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.currentPassword = _data["currentPassword"];
      this.newPassword = _data["newPassword"];
    }
  }

  static fromJS(data: any): ChangePasswordDto {
    data = typeof data === 'object' ? data : {};
    let result = new ChangePasswordDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["currentPassword"] = this.currentPassword;
    data["newPassword"] = this.newPassword;
    return data;
  }

  clone(): ChangePasswordDto {
    const json = this.toJSON();
    let result = new ChangePasswordDto();
    result.init(json);
    return result;
  }
}

export interface IChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export class ChangeUiThemeInput implements IChangeUiThemeInput {
  theme: string;

  constructor(data?: IChangeUiThemeInput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.theme = _data["theme"];
    }
  }

  static fromJS(data: any): ChangeUiThemeInput {
    data = typeof data === 'object' ? data : {};
    let result = new ChangeUiThemeInput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["theme"] = this.theme;
    return data;
  }

  clone(): ChangeUiThemeInput {
    const json = this.toJSON();
    let result = new ChangeUiThemeInput();
    result.init(json);
    return result;
  }
}

export interface IChangeUiThemeInput {
  theme: string;
}

export class ChangeUserLanguageDto implements IChangeUserLanguageDto {
  languageName: string;

  constructor(data?: IChangeUserLanguageDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.languageName = _data["languageName"];
    }
  }

  static fromJS(data: any): ChangeUserLanguageDto {
    data = typeof data === 'object' ? data : {};
    let result = new ChangeUserLanguageDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["languageName"] = this.languageName;
    return data;
  }

  clone(): ChangeUserLanguageDto {
    const json = this.toJSON();
    let result = new ChangeUserLanguageDto();
    result.init(json);
    return result;
  }
}

export interface IChangeUserLanguageDto {
  languageName: string;
}

export class CommentDto implements ICommentDto {
  text: string | undefined;
  creatorUser: UserDto;
  creationTime: Date;

  constructor(data?: ICommentDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.text = _data["text"];
      this.creatorUser = _data["creatorUser"] ? UserDto.fromJS(_data["creatorUser"]) : <any>undefined;
      this.creationTime = _data["creationTime"] ? new Date(_data["creationTime"].toString()) : <any>undefined;
    }
  }

  static fromJS(data: any): CommentDto {
    data = typeof data === 'object' ? data : {};
    let result = new CommentDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["text"] = this.text;
    data["creatorUser"] = this.creatorUser ? this.creatorUser.toJSON() : <any>undefined;
    data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
    return data;
  }

  clone(): CommentDto {
    const json = this.toJSON();
    let result = new CommentDto();
    result.init(json);
    return result;
  }
}

export interface ICommentDto {
  text: string | undefined;
  creatorUser: UserDto;
  creationTime: Date;
}

export class CommentInput implements ICommentInput {
  text: string | undefined;
  postId: number;

  constructor(data?: ICommentInput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.text = _data["text"];
      this.postId = _data["postId"];
    }
  }

  static fromJS(data: any): CommentInput {
    data = typeof data === 'object' ? data : {};
    let result = new CommentInput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["text"] = this.text;
    data["postId"] = this.postId;
    return data;
  }

  clone(): CommentInput {
    const json = this.toJSON();
    let result = new CommentInput();
    result.init(json);
    return result;
  }
}

export interface ICommentInput {
  text: string | undefined;
  postId: number;
}

export class CreatePostInput implements ICreatePostInput {
  text: string | undefined;
  image: string | undefined;

  constructor(data?: ICreatePostInput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.text = _data["text"];
      this.image = _data["image"];
    }
  }

  static fromJS(data: any): CreatePostInput {
    data = typeof data === 'object' ? data : {};
    let result = new CreatePostInput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["text"] = this.text;
    data["image"] = this.image;
    return data;
  }

  clone(): CreatePostInput {
    const json = this.toJSON();
    let result = new CreatePostInput();
    result.init(json);
    return result;
  }
}

export interface ICreatePostInput {
  text: string | undefined;
  image: string | undefined;
}

export class CreateRoleDto implements ICreateRoleDto {
  name: string;
  displayName: string;
  normalizedName: string | undefined;
  description: string | undefined;
  grantedPermissions: string[] | undefined;

  constructor(data?: ICreateRoleDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.normalizedName = _data["normalizedName"];
      this.description = _data["description"];
      if (Array.isArray(_data["grantedPermissions"])) {
        this.grantedPermissions = [] as any;
        for (let item of _data["grantedPermissions"])
          this.grantedPermissions.push(item);
      }
    }
  }

  static fromJS(data: any): CreateRoleDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateRoleDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["normalizedName"] = this.normalizedName;
    data["description"] = this.description;
    if (Array.isArray(this.grantedPermissions)) {
      data["grantedPermissions"] = [];
      for (let item of this.grantedPermissions)
        data["grantedPermissions"].push(item);
    }
    return data;
  }

  clone(): CreateRoleDto {
    const json = this.toJSON();
    let result = new CreateRoleDto();
    result.init(json);
    return result;
  }
}

export interface ICreateRoleDto {
  name: string;
  displayName: string;
  normalizedName: string | undefined;
  description: string | undefined;
  grantedPermissions: string[] | undefined;
}

export class CreateTenantDto implements ICreateTenantDto {
  tenancyName: string;
  name: string;
  adminEmailAddress: string;
  connectionString: string | undefined;
  isActive: boolean;

  constructor(data?: ICreateTenantDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.tenancyName = _data["tenancyName"];
      this.name = _data["name"];
      this.adminEmailAddress = _data["adminEmailAddress"];
      this.connectionString = _data["connectionString"];
      this.isActive = _data["isActive"];
    }
  }

  static fromJS(data: any): CreateTenantDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateTenantDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["tenancyName"] = this.tenancyName;
    data["name"] = this.name;
    data["adminEmailAddress"] = this.adminEmailAddress;
    data["connectionString"] = this.connectionString;
    data["isActive"] = this.isActive;
    return data;
  }

  clone(): CreateTenantDto {
    const json = this.toJSON();
    let result = new CreateTenantDto();
    result.init(json);
    return result;
  }
}

export interface ICreateTenantDto {
  tenancyName: string;
  name: string;
  adminEmailAddress: string;
  connectionString: string | undefined;
  isActive: boolean;
}

export class CreateUserDto implements ICreateUserDto {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  roleNames: string[] | undefined;
  password: string;

  constructor(data?: ICreateUserDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.userName = _data["userName"];
      this.name = _data["name"];
      this.surname = _data["surname"];
      this.emailAddress = _data["emailAddress"];
      this.isActive = _data["isActive"];
      if (Array.isArray(_data["roleNames"])) {
        this.roleNames = [] as any;
        for (let item of _data["roleNames"])
          this.roleNames.push(item);
      }
      this.password = _data["password"];
    }
  }

  static fromJS(data: any): CreateUserDto {
    data = typeof data === 'object' ? data : {};
    let result = new CreateUserDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["userName"] = this.userName;
    data["name"] = this.name;
    data["surname"] = this.surname;
    data["emailAddress"] = this.emailAddress;
    data["isActive"] = this.isActive;
    if (Array.isArray(this.roleNames)) {
      data["roleNames"] = [];
      for (let item of this.roleNames)
        data["roleNames"].push(item);
    }
    data["password"] = this.password;
    return data;
  }

  clone(): CreateUserDto {
    const json = this.toJSON();
    let result = new CreateUserDto();
    result.init(json);
    return result;
  }
}

export interface ICreateUserDto {
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  roleNames: string[] | undefined;
  password: string;
}

export class ExternalAuthenticateModel implements IExternalAuthenticateModel {
  authProvider: string;
  providerKey: string;
  providerAccessCode: string;

  constructor(data?: IExternalAuthenticateModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.authProvider = _data["authProvider"];
      this.providerKey = _data["providerKey"];
      this.providerAccessCode = _data["providerAccessCode"];
    }
  }

  static fromJS(data: any): ExternalAuthenticateModel {
    data = typeof data === 'object' ? data : {};
    let result = new ExternalAuthenticateModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["authProvider"] = this.authProvider;
    data["providerKey"] = this.providerKey;
    data["providerAccessCode"] = this.providerAccessCode;
    return data;
  }

  clone(): ExternalAuthenticateModel {
    const json = this.toJSON();
    let result = new ExternalAuthenticateModel();
    result.init(json);
    return result;
  }
}

export interface IExternalAuthenticateModel {
  authProvider: string;
  providerKey: string;
  providerAccessCode: string;
}

export class ExternalAuthenticateResultModel implements IExternalAuthenticateResultModel {
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number;
  waitingForActivation: boolean;

  constructor(data?: IExternalAuthenticateResultModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.accessToken = _data["accessToken"];
      this.encryptedAccessToken = _data["encryptedAccessToken"];
      this.expireInSeconds = _data["expireInSeconds"];
      this.waitingForActivation = _data["waitingForActivation"];
    }
  }

  static fromJS(data: any): ExternalAuthenticateResultModel {
    data = typeof data === 'object' ? data : {};
    let result = new ExternalAuthenticateResultModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["accessToken"] = this.accessToken;
    data["encryptedAccessToken"] = this.encryptedAccessToken;
    data["expireInSeconds"] = this.expireInSeconds;
    data["waitingForActivation"] = this.waitingForActivation;
    return data;
  }

  clone(): ExternalAuthenticateResultModel {
    const json = this.toJSON();
    let result = new ExternalAuthenticateResultModel();
    result.init(json);
    return result;
  }
}

export interface IExternalAuthenticateResultModel {
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number;
  waitingForActivation: boolean;
}

export class ExternalLoginProviderInfoModel implements IExternalLoginProviderInfoModel {
  name: string | undefined;
  clientId: string | undefined;

  constructor(data?: IExternalLoginProviderInfoModel) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
      this.clientId = _data["clientId"];
    }
  }

  static fromJS(data: any): ExternalLoginProviderInfoModel {
    data = typeof data === 'object' ? data : {};
    let result = new ExternalLoginProviderInfoModel();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["clientId"] = this.clientId;
    return data;
  }

  clone(): ExternalLoginProviderInfoModel {
    const json = this.toJSON();
    let result = new ExternalLoginProviderInfoModel();
    result.init(json);
    return result;
  }
}

export interface IExternalLoginProviderInfoModel {
  name: string | undefined;
  clientId: string | undefined;
}

export class FlatPermissionDto implements IFlatPermissionDto {
  name: string | undefined;
  displayName: string | undefined;
  description: string | undefined;

  constructor(data?: IFlatPermissionDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.description = _data["description"];
    }
  }

  static fromJS(data: any): FlatPermissionDto {
    data = typeof data === 'object' ? data : {};
    let result = new FlatPermissionDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["description"] = this.description;
    return data;
  }

  clone(): FlatPermissionDto {
    const json = this.toJSON();
    let result = new FlatPermissionDto();
    result.init(json);
    return result;
  }
}

export interface IFlatPermissionDto {
  name: string | undefined;
  displayName: string | undefined;
  description: string | undefined;
}

export class GetCurrentLoginInformationsOutput implements IGetCurrentLoginInformationsOutput {
  application: ApplicationInfoDto;
  user: UserLoginInfoDto;
  tenant: TenantLoginInfoDto;

  constructor(data?: IGetCurrentLoginInformationsOutput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.application = _data["application"] ? ApplicationInfoDto.fromJS(_data["application"]) : <any>undefined;
      this.user = _data["user"] ? UserLoginInfoDto.fromJS(_data["user"]) : <any>undefined;
      this.tenant = _data["tenant"] ? TenantLoginInfoDto.fromJS(_data["tenant"]) : <any>undefined;
    }
  }

  static fromJS(data: any): GetCurrentLoginInformationsOutput {
    data = typeof data === 'object' ? data : {};
    let result = new GetCurrentLoginInformationsOutput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["application"] = this.application ? this.application.toJSON() : <any>undefined;
    data["user"] = this.user ? this.user.toJSON() : <any>undefined;
    data["tenant"] = this.tenant ? this.tenant.toJSON() : <any>undefined;
    return data;
  }

  clone(): GetCurrentLoginInformationsOutput {
    const json = this.toJSON();
    let result = new GetCurrentLoginInformationsOutput();
    result.init(json);
    return result;
  }
}

export interface IGetCurrentLoginInformationsOutput {
  application: ApplicationInfoDto;
  user: UserLoginInfoDto;
  tenant: TenantLoginInfoDto;
}

export class GetRoleForEditOutput implements IGetRoleForEditOutput {
  role: RoleEditDto;
  permissions: FlatPermissionDto[] | undefined;
  grantedPermissionNames: string[] | undefined;

  constructor(data?: IGetRoleForEditOutput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.role = _data["role"] ? RoleEditDto.fromJS(_data["role"]) : <any>undefined;
      if (Array.isArray(_data["permissions"])) {
        this.permissions = [] as any;
        for (let item of _data["permissions"])
          this.permissions.push(FlatPermissionDto.fromJS(item));
      }
      if (Array.isArray(_data["grantedPermissionNames"])) {
        this.grantedPermissionNames = [] as any;
        for (let item of _data["grantedPermissionNames"])
          this.grantedPermissionNames.push(item);
      }
    }
  }

  static fromJS(data: any): GetRoleForEditOutput {
    data = typeof data === 'object' ? data : {};
    let result = new GetRoleForEditOutput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["role"] = this.role ? this.role.toJSON() : <any>undefined;
    if (Array.isArray(this.permissions)) {
      data["permissions"] = [];
      for (let item of this.permissions)
        data["permissions"].push(item.toJSON());
    }
    if (Array.isArray(this.grantedPermissionNames)) {
      data["grantedPermissionNames"] = [];
      for (let item of this.grantedPermissionNames)
        data["grantedPermissionNames"].push(item);
    }
    return data;
  }

  clone(): GetRoleForEditOutput {
    const json = this.toJSON();
    let result = new GetRoleForEditOutput();
    result.init(json);
    return result;
  }
}

export interface IGetRoleForEditOutput {
  role: RoleEditDto;
  permissions: FlatPermissionDto[] | undefined;
  grantedPermissionNames: string[] | undefined;
}

export class Int64EntityDto implements IInt64EntityDto {
  id: number;

  constructor(data?: IInt64EntityDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
    }
  }

  static fromJS(data: any): Int64EntityDto {
    data = typeof data === 'object' ? data : {};
    let result = new Int64EntityDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    return data;
  }

  clone(): Int64EntityDto {
    const json = this.toJSON();
    let result = new Int64EntityDto();
    result.init(json);
    return result;
  }
}

export interface IInt64EntityDto {
  id: number;
}

export class IsTenantAvailableInput implements IIsTenantAvailableInput {
  tenancyName: string;

  constructor(data?: IIsTenantAvailableInput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.tenancyName = _data["tenancyName"];
    }
  }

  static fromJS(data: any): IsTenantAvailableInput {
    data = typeof data === 'object' ? data : {};
    let result = new IsTenantAvailableInput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["tenancyName"] = this.tenancyName;
    return data;
  }

  clone(): IsTenantAvailableInput {
    const json = this.toJSON();
    let result = new IsTenantAvailableInput();
    result.init(json);
    return result;
  }
}

export interface IIsTenantAvailableInput {
  tenancyName: string;
}

export class IsTenantAvailableOutput implements IIsTenantAvailableOutput {
  state: TenantAvailabilityState;
  tenantId: number | undefined;

  constructor(data?: IIsTenantAvailableOutput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.state = _data["state"];
      this.tenantId = _data["tenantId"];
    }
  }

  static fromJS(data: any): IsTenantAvailableOutput {
    data = typeof data === 'object' ? data : {};
    let result = new IsTenantAvailableOutput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["state"] = this.state;
    data["tenantId"] = this.tenantId;
    return data;
  }

  clone(): IsTenantAvailableOutput {
    const json = this.toJSON();
    let result = new IsTenantAvailableOutput();
    result.init(json);
    return result;
  }
}

export interface IIsTenantAvailableOutput {
  state: TenantAvailabilityState;
  tenantId: number | undefined;
}

export class LikeInput implements ILikeInput {
  id: number;
  isLiked: boolean;

  constructor(data?: ILikeInput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.isLiked = _data["isLiked"];
    }
  }

  static fromJS(data: any): LikeInput {
    data = typeof data === 'object' ? data : {};
    let result = new LikeInput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["isLiked"] = this.isLiked;
    return data;
  }

  clone(): LikeInput {
    const json = this.toJSON();
    let result = new LikeInput();
    result.init(json);
    return result;
  }
}

export interface ILikeInput {
  id: number;
  isLiked: boolean;
}

export class PermissionDto implements IPermissionDto {
  id: number;
  name: string | undefined;
  displayName: string | undefined;
  description: string | undefined;

  constructor(data?: IPermissionDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.description = _data["description"];
    }
  }

  static fromJS(data: any): PermissionDto {
    data = typeof data === 'object' ? data : {};
    let result = new PermissionDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["description"] = this.description;
    return data;
  }

  clone(): PermissionDto {
    const json = this.toJSON();
    let result = new PermissionDto();
    result.init(json);
    return result;
  }
}

export interface IPermissionDto {
  id: number;
  name: string | undefined;
  displayName: string | undefined;
  description: string | undefined;
}

export class PermissionDtoListResultDto implements IPermissionDtoListResultDto {
  items: PermissionDto[] | undefined;

  constructor(data?: IPermissionDtoListResultDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [] as any;
        for (let item of _data["items"])
          this.items.push(PermissionDto.fromJS(item));
      }
    }
  }

  static fromJS(data: any): PermissionDtoListResultDto {
    data = typeof data === 'object' ? data : {};
    let result = new PermissionDtoListResultDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items)
        data["items"].push(item.toJSON());
    }
    return data;
  }

  clone(): PermissionDtoListResultDto {
    const json = this.toJSON();
    let result = new PermissionDtoListResultDto();
    result.init(json);
    return result;
  }
}

export interface IPermissionDtoListResultDto {
  items: PermissionDto[] | undefined;
}

export class PostDto implements IPostDto {
  id: number;
  text: string | undefined;
  image: string | undefined;
  user: UserDto;
  creationTime: Date;
  likeCount: number;
  isLikedByCurrentUser: boolean;
  comments: CommentDto[] | undefined;

  constructor(data?: IPostDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.text = _data["text"];
      this.image = _data["image"];
      this.user = _data["user"] ? UserDto.fromJS(_data["user"]) : <any>undefined;
      this.creationTime = _data["creationTime"] ? new Date(_data["creationTime"].toString()) : <any>undefined;
      this.likeCount = _data["likeCount"];
      this.isLikedByCurrentUser = _data["isLikedByCurrentUser"];
      if (Array.isArray(_data["comments"])) {
        this.comments = [] as any;
        for (let item of _data["comments"])
          this.comments.push(CommentDto.fromJS(item));
      }
    }
  }

  static fromJS(data: any): PostDto {
    data = typeof data === 'object' ? data : {};
    let result = new PostDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["text"] = this.text;
    data["image"] = this.image;
    data["user"] = this.user ? this.user.toJSON() : <any>undefined;
    data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
    data["likeCount"] = this.likeCount;
    data["isLikedByCurrentUser"] = this.isLikedByCurrentUser;
    if (Array.isArray(this.comments)) {
      data["comments"] = [];
      for (let item of this.comments)
        data["comments"].push(item.toJSON());
    }
    return data;
  }

  clone(): PostDto {
    const json = this.toJSON();
    let result = new PostDto();
    result.init(json);
    return result;
  }
}

export interface IPostDto {
  id: number;
  text: string | undefined;
  image: string | undefined;
  user: UserDto;
  creationTime: Date;
  likeCount: number;
  isLikedByCurrentUser: boolean;
  comments: CommentDto[] | undefined;
}

export class ProfileDto implements IProfileDto {
  user: UserDto;
  postCount: number;
  follwerCount: number;
  followingCount: number;

  constructor(data?: IProfileDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.user = _data["user"] ? UserDto.fromJS(_data["user"]) : <any>undefined;
      this.postCount = _data["postCount"];
      this.follwerCount = _data["follwerCount"];
      this.followingCount = _data["followingCount"];
    }
  }

  static fromJS(data: any): ProfileDto {
    data = typeof data === 'object' ? data : {};
    let result = new ProfileDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["user"] = this.user ? this.user.toJSON() : <any>undefined;
    data["postCount"] = this.postCount;
    data["follwerCount"] = this.follwerCount;
    data["followingCount"] = this.followingCount;
    return data;
  }

  clone(): ProfileDto {
    const json = this.toJSON();
    let result = new ProfileDto();
    result.init(json);
    return result;
  }
}

export interface IProfileDto {
  user: UserDto;
  postCount: number;
  follwerCount: number;
  followingCount: number;
}

export class ProfileInput implements IProfileInput {
  name: string | undefined;
  image: string | undefined;

  constructor(data?: IProfileInput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
      this.image = _data["image"];
    }
  }

  static fromJS(data: any): ProfileInput {
    data = typeof data === 'object' ? data : {};
    let result = new ProfileInput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["image"] = this.image;
    return data;
  }

  clone(): ProfileInput {
    const json = this.toJSON();
    let result = new ProfileInput();
    result.init(json);
    return result;
  }
}

export interface IProfileInput {
  name: string | undefined;
  image: string | undefined;
}

export class RegisterInput implements IRegisterInput {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  password: string;
  captchaResponse: string | undefined;

  constructor(data?: IRegisterInput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.name = _data["name"];
      this.surname = _data["surname"];
      this.userName = _data["userName"];
      this.emailAddress = _data["emailAddress"];
      this.password = _data["password"];
      this.captchaResponse = _data["captchaResponse"];
    }
  }

  static fromJS(data: any): RegisterInput {
    data = typeof data === 'object' ? data : {};
    let result = new RegisterInput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["name"] = this.name;
    data["surname"] = this.surname;
    data["userName"] = this.userName;
    data["emailAddress"] = this.emailAddress;
    data["password"] = this.password;
    data["captchaResponse"] = this.captchaResponse;
    return data;
  }

  clone(): RegisterInput {
    const json = this.toJSON();
    let result = new RegisterInput();
    result.init(json);
    return result;
  }
}

export interface IRegisterInput {
  name: string;
  surname: string;
  userName: string;
  emailAddress: string;
  password: string;
  captchaResponse: string | undefined;
}

export class RegisterOutput implements IRegisterOutput {
  canLogin: boolean;

  constructor(data?: IRegisterOutput) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.canLogin = _data["canLogin"];
    }
  }

  static fromJS(data: any): RegisterOutput {
    data = typeof data === 'object' ? data : {};
    let result = new RegisterOutput();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["canLogin"] = this.canLogin;
    return data;
  }

  clone(): RegisterOutput {
    const json = this.toJSON();
    let result = new RegisterOutput();
    result.init(json);
    return result;
  }
}

export interface IRegisterOutput {
  canLogin: boolean;
}

export class ResetPasswordDto implements IResetPasswordDto {
  adminPassword: string;
  userId: number;
  newPassword: string;

  constructor(data?: IResetPasswordDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.adminPassword = _data["adminPassword"];
      this.userId = _data["userId"];
      this.newPassword = _data["newPassword"];
    }
  }

  static fromJS(data: any): ResetPasswordDto {
    data = typeof data === 'object' ? data : {};
    let result = new ResetPasswordDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["adminPassword"] = this.adminPassword;
    data["userId"] = this.userId;
    data["newPassword"] = this.newPassword;
    return data;
  }

  clone(): ResetPasswordDto {
    const json = this.toJSON();
    let result = new ResetPasswordDto();
    result.init(json);
    return result;
  }
}

export interface IResetPasswordDto {
  adminPassword: string;
  userId: number;
  newPassword: string;
}

export class RoleDto implements IRoleDto {
  id: number;
  name: string;
  displayName: string;
  normalizedName: string | undefined;
  description: string | undefined;
  grantedPermissions: string[] | undefined;

  constructor(data?: IRoleDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.normalizedName = _data["normalizedName"];
      this.description = _data["description"];
      if (Array.isArray(_data["grantedPermissions"])) {
        this.grantedPermissions = [] as any;
        for (let item of _data["grantedPermissions"])
          this.grantedPermissions.push(item);
      }
    }
  }

  static fromJS(data: any): RoleDto {
    data = typeof data === 'object' ? data : {};
    let result = new RoleDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["normalizedName"] = this.normalizedName;
    data["description"] = this.description;
    if (Array.isArray(this.grantedPermissions)) {
      data["grantedPermissions"] = [];
      for (let item of this.grantedPermissions)
        data["grantedPermissions"].push(item);
    }
    return data;
  }

  clone(): RoleDto {
    const json = this.toJSON();
    let result = new RoleDto();
    result.init(json);
    return result;
  }
}

export interface IRoleDto {
  id: number;
  name: string;
  displayName: string;
  normalizedName: string | undefined;
  description: string | undefined;
  grantedPermissions: string[] | undefined;
}

export class RoleDtoListResultDto implements IRoleDtoListResultDto {
  items: RoleDto[] | undefined;

  constructor(data?: IRoleDtoListResultDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [] as any;
        for (let item of _data["items"])
          this.items.push(RoleDto.fromJS(item));
      }
    }
  }

  static fromJS(data: any): RoleDtoListResultDto {
    data = typeof data === 'object' ? data : {};
    let result = new RoleDtoListResultDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items)
        data["items"].push(item.toJSON());
    }
    return data;
  }

  clone(): RoleDtoListResultDto {
    const json = this.toJSON();
    let result = new RoleDtoListResultDto();
    result.init(json);
    return result;
  }
}

export interface IRoleDtoListResultDto {
  items: RoleDto[] | undefined;
}

export class RoleDtoPagedResultDto implements IRoleDtoPagedResultDto {
  items: RoleDto[] | undefined;
  totalCount: number;

  constructor(data?: IRoleDtoPagedResultDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [] as any;
        for (let item of _data["items"])
          this.items.push(RoleDto.fromJS(item));
      }
      this.totalCount = _data["totalCount"];
    }
  }

  static fromJS(data: any): RoleDtoPagedResultDto {
    data = typeof data === 'object' ? data : {};
    let result = new RoleDtoPagedResultDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items)
        data["items"].push(item.toJSON());
    }
    data["totalCount"] = this.totalCount;
    return data;
  }

  clone(): RoleDtoPagedResultDto {
    const json = this.toJSON();
    let result = new RoleDtoPagedResultDto();
    result.init(json);
    return result;
  }
}

export interface IRoleDtoPagedResultDto {
  items: RoleDto[] | undefined;
  totalCount: number;
}

export class RoleEditDto implements IRoleEditDto {
  id: number;
  name: string;
  displayName: string;
  description: string | undefined;
  isStatic: boolean;

  constructor(data?: IRoleEditDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.description = _data["description"];
      this.isStatic = _data["isStatic"];
    }
  }

  static fromJS(data: any): RoleEditDto {
    data = typeof data === 'object' ? data : {};
    let result = new RoleEditDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["description"] = this.description;
    data["isStatic"] = this.isStatic;
    return data;
  }

  clone(): RoleEditDto {
    const json = this.toJSON();
    let result = new RoleEditDto();
    result.init(json);
    return result;
  }
}

export interface IRoleEditDto {
  id: number;
  name: string;
  displayName: string;
  description: string | undefined;
  isStatic: boolean;
}

export class RoleListDto implements IRoleListDto {
  id: number;
  name: string | undefined;
  displayName: string | undefined;
  isStatic: boolean;
  isDefault: boolean;
  creationTime: Date;

  constructor(data?: IRoleListDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.displayName = _data["displayName"];
      this.isStatic = _data["isStatic"];
      this.isDefault = _data["isDefault"];
      this.creationTime = _data["creationTime"] ? new Date(_data["creationTime"].toString()) : <any>undefined;
    }
  }

  static fromJS(data: any): RoleListDto {
    data = typeof data === 'object' ? data : {};
    let result = new RoleListDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["displayName"] = this.displayName;
    data["isStatic"] = this.isStatic;
    data["isDefault"] = this.isDefault;
    data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
    return data;
  }

  clone(): RoleListDto {
    const json = this.toJSON();
    let result = new RoleListDto();
    result.init(json);
    return result;
  }
}

export interface IRoleListDto {
  id: number;
  name: string | undefined;
  displayName: string | undefined;
  isStatic: boolean;
  isDefault: boolean;
  creationTime: Date;
}

export class RoleListDtoListResultDto implements IRoleListDtoListResultDto {
  items: RoleListDto[] | undefined;

  constructor(data?: IRoleListDtoListResultDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [] as any;
        for (let item of _data["items"])
          this.items.push(RoleListDto.fromJS(item));
      }
    }
  }

  static fromJS(data: any): RoleListDtoListResultDto {
    data = typeof data === 'object' ? data : {};
    let result = new RoleListDtoListResultDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items)
        data["items"].push(item.toJSON());
    }
    return data;
  }

  clone(): RoleListDtoListResultDto {
    const json = this.toJSON();
    let result = new RoleListDtoListResultDto();
    result.init(json);
    return result;
  }
}

export interface IRoleListDtoListResultDto {
  items: RoleListDto[] | undefined;
}

export enum TenantAvailabilityState {
  _1 = 1,
  _2 = 2,
  _3 = 3,
}

export class TenantDto implements ITenantDto {
  id: number;
  tenancyName: string;
  name: string;
  isActive: boolean;

  constructor(data?: ITenantDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.tenancyName = _data["tenancyName"];
      this.name = _data["name"];
      this.isActive = _data["isActive"];
    }
  }

  static fromJS(data: any): TenantDto {
    data = typeof data === 'object' ? data : {};
    let result = new TenantDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["tenancyName"] = this.tenancyName;
    data["name"] = this.name;
    data["isActive"] = this.isActive;
    return data;
  }

  clone(): TenantDto {
    const json = this.toJSON();
    let result = new TenantDto();
    result.init(json);
    return result;
  }
}

export interface ITenantDto {
  id: number;
  tenancyName: string;
  name: string;
  isActive: boolean;
}

export class TenantDtoPagedResultDto implements ITenantDtoPagedResultDto {
  items: TenantDto[] | undefined;
  totalCount: number;

  constructor(data?: ITenantDtoPagedResultDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [] as any;
        for (let item of _data["items"])
          this.items.push(TenantDto.fromJS(item));
      }
      this.totalCount = _data["totalCount"];
    }
  }

  static fromJS(data: any): TenantDtoPagedResultDto {
    data = typeof data === 'object' ? data : {};
    let result = new TenantDtoPagedResultDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items)
        data["items"].push(item.toJSON());
    }
    data["totalCount"] = this.totalCount;
    return data;
  }

  clone(): TenantDtoPagedResultDto {
    const json = this.toJSON();
    let result = new TenantDtoPagedResultDto();
    result.init(json);
    return result;
  }
}

export interface ITenantDtoPagedResultDto {
  items: TenantDto[] | undefined;
  totalCount: number;
}

export class TenantLoginInfoDto implements ITenantLoginInfoDto {
  id: number;
  tenancyName: string | undefined;
  name: string | undefined;

  constructor(data?: ITenantLoginInfoDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.tenancyName = _data["tenancyName"];
      this.name = _data["name"];
    }
  }

  static fromJS(data: any): TenantLoginInfoDto {
    data = typeof data === 'object' ? data : {};
    let result = new TenantLoginInfoDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["tenancyName"] = this.tenancyName;
    data["name"] = this.name;
    return data;
  }

  clone(): TenantLoginInfoDto {
    const json = this.toJSON();
    let result = new TenantLoginInfoDto();
    result.init(json);
    return result;
  }
}

export interface ITenantLoginInfoDto {
  id: number;
  tenancyName: string | undefined;
  name: string | undefined;
}

export class UserDto implements IUserDto {
  id: number;
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string | undefined;
  lastLoginTime: Date | undefined;
  creationTime: Date;
  roleNames: string[] | undefined;
  image: string | undefined;

  constructor(data?: IUserDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.userName = _data["userName"];
      this.name = _data["name"];
      this.surname = _data["surname"];
      this.emailAddress = _data["emailAddress"];
      this.isActive = _data["isActive"];
      this.fullName = _data["fullName"];
      this.lastLoginTime = _data["lastLoginTime"] ? new Date(_data["lastLoginTime"].toString()) : <any>undefined;
      this.creationTime = _data["creationTime"] ? new Date(_data["creationTime"].toString()) : <any>undefined;
      if (Array.isArray(_data["roleNames"])) {
        this.roleNames = [] as any;
        for (let item of _data["roleNames"])
          this.roleNames.push(item);
      }
      this.image = _data["image"];
    }
  }

  static fromJS(data: any): UserDto {
    data = typeof data === 'object' ? data : {};
    let result = new UserDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["userName"] = this.userName;
    data["name"] = this.name;
    data["surname"] = this.surname;
    data["emailAddress"] = this.emailAddress;
    data["isActive"] = this.isActive;
    data["fullName"] = this.fullName;
    data["lastLoginTime"] = this.lastLoginTime ? this.lastLoginTime.toISOString() : <any>undefined;
    data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : <any>undefined;
    if (Array.isArray(this.roleNames)) {
      data["roleNames"] = [];
      for (let item of this.roleNames)
        data["roleNames"].push(item);
    }
    data["image"] = this.image;
    return data;
  }

  clone(): UserDto {
    const json = this.toJSON();
    let result = new UserDto();
    result.init(json);
    return result;
  }
}

export interface IUserDto {
  id: number;
  userName: string;
  name: string;
  surname: string;
  emailAddress: string;
  isActive: boolean;
  fullName: string | undefined;
  lastLoginTime: Date | undefined;
  creationTime: Date;
  roleNames: string[] | undefined;
  image: string | undefined;
}

export class UserDtoPagedResultDto implements IUserDtoPagedResultDto {
  items: UserDto[] | undefined;
  totalCount: number;

  constructor(data?: IUserDtoPagedResultDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      if (Array.isArray(_data["items"])) {
        this.items = [] as any;
        for (let item of _data["items"])
          this.items.push(UserDto.fromJS(item));
      }
      this.totalCount = _data["totalCount"];
    }
  }

  static fromJS(data: any): UserDtoPagedResultDto {
    data = typeof data === 'object' ? data : {};
    let result = new UserDtoPagedResultDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    if (Array.isArray(this.items)) {
      data["items"] = [];
      for (let item of this.items)
        data["items"].push(item.toJSON());
    }
    data["totalCount"] = this.totalCount;
    return data;
  }

  clone(): UserDtoPagedResultDto {
    const json = this.toJSON();
    let result = new UserDtoPagedResultDto();
    result.init(json);
    return result;
  }
}

export interface IUserDtoPagedResultDto {
  items: UserDto[] | undefined;
  totalCount: number;
}

export class UserLoginInfoDto implements IUserLoginInfoDto {
  id: number;
  name: string | undefined;
  surname: string | undefined;
  userName: string | undefined;
  emailAddress: string | undefined;

  constructor(data?: IUserLoginInfoDto) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.id = _data["id"];
      this.name = _data["name"];
      this.surname = _data["surname"];
      this.userName = _data["userName"];
      this.emailAddress = _data["emailAddress"];
    }
  }

  static fromJS(data: any): UserLoginInfoDto {
    data = typeof data === 'object' ? data : {};
    let result = new UserLoginInfoDto();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["id"] = this.id;
    data["name"] = this.name;
    data["surname"] = this.surname;
    data["userName"] = this.userName;
    data["emailAddress"] = this.emailAddress;
    return data;
  }

  clone(): UserLoginInfoDto {
    const json = this.toJSON();
    let result = new UserLoginInfoDto();
    result.init(json);
    return result;
  }
}

export interface IUserLoginInfoDto {
  id: number;
  name: string | undefined;
  surname: string | undefined;
  userName: string | undefined;
  emailAddress: string | undefined;
}

export interface FileParameter {
  data: any;
  fileName: string;
}
