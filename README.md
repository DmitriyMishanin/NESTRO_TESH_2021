# MonStability

СИСТЕМА МОНИТОРИНГА СТАБИЛЬНОСТИ ПРОЦЕССОВ

Модуль расчета устойчивости и формирования сигналов отклонений

Допущения:

* Граф устойчивости направленный.
* Обход графа начинается с узлов метрик.
* Ребра имеют веса.

Ограничения:

* Узлы графа содержат атрибуты:

        'type':string - тип узла

            'metric' - узел метрики
            
            'service' - узел сервиса
            
            'and' - узел логического И
            
            'or' - улел логического ИЛИ
            
        'access':integer - текущая доступность
        
        'stead':float - текущая устойчивость

* Ребра графа содержат свойство:

        'weight':float - вес ребра (коэффициент передачи сигнала)
    
