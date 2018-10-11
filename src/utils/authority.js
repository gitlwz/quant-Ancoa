export function getAuthority() {
  return localStorage.getItem('antd-pro-authority') || 'admin';
}
export function setAuthority(authority) {
  return localStorage.setItem('antd-pro-authority', authority);
}
