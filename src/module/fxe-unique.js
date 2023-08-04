export function FXE_unique() {
    const d = new Date()
    return parseInt(d.getDate()) + parseInt(d.getSeconds()) + parseInt(d.getTime());
}