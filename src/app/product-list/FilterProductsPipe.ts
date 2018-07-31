import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'underscore';
@Pipe({
    name: 'filter'
})
export class FilterProductPipe implements PipeTransform {
    arrayObj:any;
    salesResult:any[]=[];
    transform(items: any[],  filter: any[],colorFilterArr :any[],searchFilter:String,sales:boolean ): Array<any> {
        var checkboxFilter = [], colorFilter=[];
        var searchableList = ['name']  
        for(var i=0; i<filter.length; i++) {
            checkboxFilter.push(filter[i].value);
        }
        for(var i=0; i<colorFilterArr.length; i++) {
            colorFilter.push(colorFilterArr[i].value);
        }
        if(!!items && items.length )
        {
            if(filter && filter.length)
            {
                items =items.filter(filteredArr);
            }
            if(colorFilterArr && colorFilterArr.length)
            {
                items=items.filter(filteredArrColor);
            }
            if(sales)
            { 
                sales= sales.toString()=='true';
                items= items.filter(function(item){
                    return item.sales == sales
                })
            }
            if(searchFilter)
            {
                items=items.filter(function(item)
                {
                    for(var k in searchableList ){
                        if(item[searchableList[k]].toLowerCase().indexOf(searchFilter) > -1){
                          return true;
                        }
                      }
                }); 
            }
            var result=items;
        }
        else
        {
            return [];
        }
        function filterBySales(item,index,arr){
          return salesArr(item)
        }
        function filteredArr(item,index,arr){
            return filterByType(item);
        }
        function filteredArrColor(item,index,arr){
            return filterByColor(item);
        }
        function salesArr(item){
            // console.log(item.sales)
                return item.sales=='true';
        }
        function filterByType(item)
        {
            let productArr:any[]=[];
            if(checkboxFilter && checkboxFilter.length)
            {
                return checkboxFilter.includes(item.type);
            }
            else{
                return item;
            }
        }
        function filterByColor(item){
            let productArr:any[]=[];
            if(colorFilter && colorFilter.length)
            {
                return colorFilter.includes(item.color);
            }
            else{
                return item;
            }
        }
        return result;
    }
}