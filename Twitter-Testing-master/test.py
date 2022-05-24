from sqlite3 import connect
from xml.dom.minidom import Element
from selenium import webdriver
#from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import datetime
import time
#import openpyxl as excel
import urllib.parse

PATH = "C:/Users/Lucio/AppData/Local/Programs/Python/Python310/chromedriver_win32/chromedriver.exe"
driver = webdriver.Chrome(PATH)
driver.get('https://www.linkedin.com/')
time.sleep(2)

username = driver.find_element_by_xpath("//input[@name='session_key']")
password = driver.find_element_by_xpath("//input[@name='session_password']")
username.send_keys('ahmedmostafaabdelrahman80@gmail.com')
password.send_keys('^cVNrc2(RaQ.m:j')
time.sleep(2)

login = driver.find_element_by_xpath("//button[@type='submit']").click()

#///////////////////////////Adding///////////////////////////////////////
driver.get('https://www.linkedin.com/search/results/people/?network=%5B%22S%22%5D&origin=FACETED_SEARCH&page=4&sid=4ju')
time.sleep(2)

count = 5
while count!=0:

    all_buttons = driver.find_elements_by_tag_name("button")
    connect_buttons = [btn for btn in all_buttons if btn.text == "Connect"] # Connect button 


    for btn in connect_buttons:
        #btn.click()
        driver.execute_script("arguments[0].click();", btn)
        time.sleep(2)
        send = driver.find_element_by_xpath("//button[@aria-label='Send now']")
        driver.execute_script("arguments[0].click();", send)
        time.sleep(2)
        dismiss = driver.find_element_by_xpath("//button[@aria-label='Dismiss']")
        driver.execute_script("arguments[0].click();", dismiss)
        time.sleep(2)
    
    try:
        if btn.text == "Follow":
            follow_buttons = [btn for btn in all_buttons if btn.text == "Follow" ] # Follow button      
            for btn in follow_buttons:  
                driver.execute_script("arguments[0].click();", btn)
                time.sleep(2)
        
    except:
        print("No follow button found")
#if btn.text == "Follow":
 #   follow_buttons = [btn for btn in all_buttons if btn.text == "Follow" ] # Follow button 
  #  for btn in follow_buttons:
        #btn.click()
   #     driver.execute_script("arguments[0].click();", btn)
    #    time.sleep(2)
#else:
 #   pass
 
#///////////////////////////Ending///////////////////////////////////////    
    time.sleep(5)
    next = driver.find_element_by_xpath("//button[@aria-label='Next']")
    next.click()
    count -=1
    
    #next = driver.find_element_by_css_selector('button[aria-label="Next"]')
    
   # if count==5:
        #next = driver.find_element_by_xpath("//button[@aria-label='Next']")
        #next = driver.find_element_by_link_text("Next")
        #next = driver.find_element_by_class_name("artdeco-pagination__button artdeco-pagination__button--next artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view")
       # driver.execute_script("arguments[0].click();", next)
   # elif count==4:
     #   next = driver.find_element_by_xpath("//button[@aria-label='Page 3']")
      #  driver.execute_script("arguments[0].click();", next)
        
    
    #next = driver.find_element_by_xpath("/html/body/div[5]/div[3]/div[2]/div/div[1]/main/div/div/div[5]/div/div/button[2]")
    #next = driver.find_element_by_id("ember1065")
    #next= driver.find_element_by_class_name("artdeco-pagination__button artdeco-pagination__button--next artdeco-button artdeco-button--muted artdeco-button--icon-right artdeco-button--1 artdeco-button--tertiary ember-view")
    #driver.execute_script("arguments[0].click();", next)
    