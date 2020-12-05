export const spinner = (selector: string, show: boolean) => {
    const spinner = `
            <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    `;
    if(show) {
        return $(selector).append(spinner);
    } else {
        return $(selector).remove();
    }
    
}