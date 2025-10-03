import { Routes } from '@angular/router';
import { Auth } from './auth/auth';
import { SignIn } from './auth/sign-in/sign-in';
import { EnableMfa } from './auth/enable-mfa/enable-mfa';
import { VerifyMfa } from './auth/verify-mfa/verify-mfa';
import { SetMfaRecoveryPassword } from './auth/set-mfa-recovery-password/set-mfa-recovery-password';
import { DisableMfa } from './auth/disable-mfa/disable-mfa';
import { ResetPassword } from './auth/reset-password/reset-password';
import { ChangePassword } from './auth/change-password/change-password';

export const routes: Routes = [
     { path: '', component: Auth, children: [
          { path: '', component: SignIn },
          { path: 'sign-in', component: SignIn },
          { path: 'enable-mfa', component: EnableMfa },
          { path: 'verify-mfa', component: VerifyMfa },
          { path: 'mfa-recovery-password', component: SetMfaRecoveryPassword },
          { path: 'disable-mfa', component: DisableMfa },
          { path: 'reset-password', component: ResetPassword },
          { path: 'change-password', component: ChangePassword },
     ]},
];
