import sys, os

from dotenv import load_dotenv
load_dotenv(verbose=True)

# from langchain.document_loaders import PyPDFLoader
# from langchain.text_splitter import RecursiveCharacterTextSplitter
# from langchain.vectorstores import Chroma
# from langchain.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI # 채팅 모드 
# from langchain.chains import RetrievalQA

# ########
# # Loader
# ########
# loader = PyPDFLoader("./model/mondays_tarot.pdf")
# pages = loader.load_and_split()

# # split
# text_splitter = RecursiveCharacterTextSplitter(
#     chunk_size = 200,
#     chunk_overlap = 20,
#     length_function = len,
#     is_separator_regex = False,
# )
# texts = text_splitter.split_documents(pages)

# #Embedding
# embeddings_model = OpenAIEmbeddings()

# db = Chroma.from_documents(texts, embeddings_model) # persist_directory="/chroma"


# 나의 질문
# if my_prompt := st.chat_input():
#     llm = ChatOpenAI(model_name="ft:gpt-3.5-turbo-0125:personal::9Bd5ntaA", temperature=0.2,  
#                     streaming=True)
#     answer = RetrievalQA.from_chain_type(llm)
#                                         #  , retriever=db.as_retriever())
    
#     result = answer({"query":my_prompt})
    
#     print(result["result"])

def answer2you(input_message, celebrity):

    celebrity_chatbot = {
        "아이유" : "ft:gpt-3.5-turbo-1106:personal::9BurxOzE", 
        "차은우" : "ft",
        "춘식이" : "ft:gpt-3.5-turbo-0125:personal::9Bd5ntaA"
    }

    llm = ChatOpenAI(model_name=celebrity_chatbot[celebrity], temperature=0.2,  
                        streaming=True)
        # answer = RetrievalQA.from_chain_type(llm
        #                                      , retriever=db.as_retriever())
        
        # result = answer({"query":my_prompt})
        
        # print(result["result"])
    # return result["result"]
    answer = llm.predict(input_message)
    print(answer)
    return answer
##############
# 고른 카드 저장
# def seletec_card_answer2you(seleted_card):
#     if seleted_card:
#         msg = f"{seleted_card} 타로 카드의 정보를 알려줘!"
#         llm = ChatOpenAI(model_name=celebrity_chatbot[celebrity], temperature=0.2,  
#                         streaming=True)
#         answer = llm.predict(msg)
#     return answer


#################
# buy me a coffee
#################
# button(username="arcana", floating=True, width=221)