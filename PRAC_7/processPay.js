export function payment(items,qty)
{
    let item_name=["Cookie","Noodles","Soft Drink","Chocolates"];
    let price=[50,70,80,50];
    let cost;
    for(let i=0; i<item_name.length; i++)
    {
        if (items==item_name[i])
        {
            cost=qty*price[i];
        }
    }
    alert('Total cost is:'+cost);
}