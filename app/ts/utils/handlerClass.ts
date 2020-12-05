export const injectClass = (
  selector: string,
  addClass: string,
  removeClass?: string,
  haveClass?: boolean
) => {
  if (haveClass) {
    return $(selector).addClass(addClass);
  } else {
    return $(selector).removeClass(removeClass);
  }
};
