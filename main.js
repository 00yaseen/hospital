
    document.getElementById("button").addEventListener('click',
        function() {
            var ans = document.getElementById('ans');
            if (ans.style.display === 'none') {
                ans.style.display = 'block';
                this.textContent = '- Are telemedicine consultations available ?';
            } else{
                ans.style.display = 'none';
                this.textContent = '+ Are telemedicine consultations available ?'
            }
        });


        document.getElementById("button1").addEventListener('click',
            function() {
                var ans = document.getElementById('ans1');
                if (ans.style.display === 'none') {
                    ans.style.display = 'block';
                    this.textContent = '- Are telemedicine consultations available ?';
                } else{
                    ans.style.display = 'none';
                    this.textContent = '+ Are telemedicine consultations available ?'
                }
            });


            
        document.getElementById("button2").addEventListener('click',
            function() {
                var ans = document.getElementById('ans2');
                if (ans.style.display === 'none') {
                    ans.style.display = 'block';
                    this.textContent = '-  How much does a consultation cost ?';
                } else{
                    ans.style.display = 'none';
                    this.textContent = '+  How much does a consultation cost ?'
                }
            });
            

        /*service details*/
        document.getElementById("btn").addEventListener('click',
            function() {
                var answer = document.getElementById('answer');
                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    this.textContent = '- Are telemedicine consultations available ?';
                } else{
                    answer.style.display = 'none';
                    this.textContent = '+ Are telemedicine consultations available ?'
                }
            });
    
            